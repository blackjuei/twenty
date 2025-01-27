import * as React from 'react';
import styled from '@emotion/styled';

import { IconCheck, IconMinus } from '@/ui/icon';

export enum CheckboxVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}

type OwnProps = {
  checked: boolean;
  indeterminate?: boolean;
  onChange?: (value: boolean) => void;
  variant?: CheckboxVariant;
};

const StyledInputContainer = styled.div`
  align-items: center;
  display: flex;
  position: relative;
`;

const StyledInput = styled.input<{
  indeterminate?: boolean;
  variant?: CheckboxVariant;
}>`
  cursor: pointer;
  margin: 0;
  opacity: 0;
  position: absolute;
  z-index: 10;

  & + label {
    cursor: pointer;
    height: 14px;
    padding: 0;
    position: relative;
    width: 14px;
  }

  & + label:before {
    border-radius: ${({ theme }) => theme.border.radius.sm};
    background: ${({ theme, indeterminate }) =>
      indeterminate ? theme.color.blue : 'transparent'};
    border-style: solid;
    border-width: 1px;
    border-color: ${({ theme, indeterminate, variant }) =>
      indeterminate
        ? theme.color.blue
        : variant === CheckboxVariant.Primary
        ? theme.border.color.inverted
        : theme.border.color.secondaryInverted};
    content: '';
    cursor: pointer;
    display: inline-block;
    height: 12px;
    width: 12px;
  }

  &:checked + label:before {
    background: ${({ theme }) => theme.color.blue};
    border-color: ${({ theme }) => theme.color.blue};
  }

  & + label > svg {
    height: 12px;
    left: 1px;
    position: absolute;
    stroke: ${({ theme }) => theme.grayScale.gray0};
    top: 1px;
    width: 12px;
  }
`;

export function Checkbox({
  checked,
  onChange,
  indeterminate,
  variant = CheckboxVariant.Primary,
}: OwnProps) {
  const [isInternalChecked, setIsInternalChecked] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    setIsInternalChecked(checked);
  }, [checked]);

  function handleChange(value: boolean) {
    onChange?.(value);
    setIsInternalChecked(!isInternalChecked);
  }

  return (
    <StyledInputContainer>
      <StyledInput
        type="checkbox"
        name="styled-checkbox"
        data-testid="input-checkbox"
        checked={isInternalChecked}
        indeterminate={indeterminate}
        variant={variant}
        onChange={(event) => handleChange(event.target.checked)}
      />
      <label htmlFor="checkbox">
        {indeterminate ? (
          <IconMinus />
        ) : isInternalChecked ? (
          <IconCheck />
        ) : (
          <></>
        )}
      </label>
    </StyledInputContainer>
  );
}
