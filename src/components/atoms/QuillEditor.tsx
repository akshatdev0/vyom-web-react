import React from 'react';
import { Control, useController, FieldName, FieldValues } from 'react-hook-form';
import { FormGroup, Input } from 'reactstrap';
// react plugin that creates text editor
import ReactQuill from 'react-quill';

import { Override } from 'types';
import { getFormError } from 'core/utils';

type ReactstrapInputProps = React.ComponentProps<typeof Input>;

type InputProps = Override<ReactstrapInputProps, { defaultValue?: string; value?: string }>;

type Props<TFieldValues extends FieldValues = FieldValues> = InputProps & {
  name: FieldName<TFieldValues>;
  control: Control<TFieldValues>;
  errorText?: any;
  labelValue: string;
  placeholder?: string | undefined;
  theme?: string | undefined;
  mode?: 'minimal' | 'basic' | 'full';
};

const Mode = {
  minimal: {
    modules: {
      toolbar: [
        [{ header: 1 }, { header: 2 }],
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link'],
        ['clean'],
      ],
    },
    formats: ['header', 'bold', 'italic', 'underline', 'list', 'indent', 'link'],
  },
  basic: {
    modules: {
      toolbar: [
        [{ font: [] }, { header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        ['blockquote', 'code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        [{ align: [] }],
        ['link', 'image'],
        ['clean'],
      ],
    },
    formats: [
      'font',
      'header',
      'bold',
      'italic',
      'underline',
      'strike',
      'color',
      'background',
      'blockquote',
      'code',
      'code-block',
      'list',
      'indent',
      'align',
      'link',
      'image',
    ],
  },
  full: {
    modules: {
      toolbar: [
        [{ font: [] }, { header: [1, 2, 3, 4, 5, 6, false] }, { size: ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ script: 'sub' }, { script: 'super' }, 'blockquote', 'code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        [{ direction: 'rtl' }, { align: [] }],
        ['link', 'image', 'video', 'formula'],
        ['clean'],
      ],
    },
    formats: [
      'font',
      'header',
      'size',
      'bold',
      'italic',
      'underline',
      'strike',
      'color',
      'background',
      'script',
      'blockquote',
      'code',
      'code-block',
      'list',
      'indent',
      'direction',
      'align',
      'link',
      'image',
      'video',
    ],
  },
};

const QuillEditor = ({
  name,
  control,
  defaultValue = '',
  labelValue,
  placeholder,
  disabled,
  theme = 'snow',
  mode = 'minimal',
}: Props): JSX.Element => {
  const {
    field: { ref, ...rest },
    fieldState: { invalid },
    formState: { errors },
  } = useController({
    name: `${name}` as const,
    control,
    defaultValue: defaultValue || '',
  });

  const inputProps: InputProps = {
    id: name,
    innerRef: ref,
    invalid,
    disabled,
    ...rest,
  };

  const error = invalid ? <div className="invalid-feedback">{getFormError(name, errors)}</div> : null;

  return (
    <FormGroup>
      <label className="form-control-label">{labelValue}</label>
      <div data-quill-placeholder={placeholder} data-toggle="quill" />
      <ReactQuill theme={theme} modules={Mode[mode].modules} formats={Mode[mode].formats} {...inputProps} />
      {error}
    </FormGroup>
  );
};

export default QuillEditor;
