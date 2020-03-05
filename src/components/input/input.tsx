import React, { ChangeEvent, FormEvent, ReactElement } from 'react';
import './input.scss';

interface Props {
  children: string;
  onChange(input: string): void;
  onSubmit(): void;
}

const PLACEHOLDER = `https://i.mtgeni.us/1.png
https://i.mtgeni.us/2.png
https://i.mtgeni.us/3.png`;

export default function Input({
  children,
  onChange,
  onSubmit,
}: Props): ReactElement {
  const count: number = children.split('\n').length;

  const isSubmitDisabled: boolean = count % 9 > 0;

  const submitValue: string = React.useMemo((): string => {
    if (isSubmitDisabled) {
      return `Add ${9 - (count % 9)}`;
    } else {
      return 'Submit';
    }
  }, [count, isSubmitDisabled]);

  const handleFormSubmit = React.useCallback(
    (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      onSubmit();
    },
    [onSubmit],
  );

  const handleTextareaChange = React.useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>): void => {
      onChange(e.currentTarget.value);
    },
    [onChange],
  );

  return (
    <form action="#" className="input" onSubmit={handleFormSubmit}>
      <textarea
        cols={42}
        onChange={handleTextareaChange}
        placeholder={PLACEHOLDER}
        rows={12}
        value={children}
      />
      <input disabled={isSubmitDisabled} type="submit" value={submitValue} />
    </form>
  );
}
