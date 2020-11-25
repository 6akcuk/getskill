import { CSSProperties } from 'react'
import { StylesConfig } from 'react-select'
import styled from 'styled-components'
import { IconSelector, IconClose } from '../Icons'
import { theme } from '../../config/theme'

const selectStyles: StylesConfig = {
  container: (styles: CSSProperties) => ({
    ...styles,
    width: '100%',
  }),
  control: (styles: CSSProperties, { isDisabled, isFocused }: any) => ({
    ...styles,
    backgroundColor: theme.colors.white,
    borderRadius: theme.sizes.radius.md,
    borderColor: isFocused ? theme.colors.primary : theme.colors.border,
    boxShadow: isFocused ? theme.shadow.outline.primary : theme.shadow.sm,
    cursor: 'pointer',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    opacity: isDisabled ? '0.4' : '1',
    padding: '0.5rem 0.75rem',
  }),
  clearIndicator: (styles: CSSProperties) => ({
    ...styles,
    '&:empty': {
      padding: '0',
    } as any,
  }),
  dropdownIndicator: (styles: CSSProperties) => ({
    ...styles,
    padding: '0',
    '&:empty': {
      padding: '0',
    } as any,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  input: (styles: CSSProperties) => ({
    ...styles,
    margin: '0',
  }),
  menu: (styles: CSSProperties) => ({
    ...styles,
    backgroundColor: theme.colors.white,
    boxShadow: theme.shadow.lg,
    zIndex: theme.zIndex.dropdown,
  }),
  menuList: (styles: CSSProperties) => ({
    ...styles,
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    padding: '0.25rem 0',
    borderRadius: theme.sizes.radius.md,
    boxShadow: theme.shadow.xs,
  }),
  multiValue: (styles: CSSProperties) => ({
    ...styles,
    alignItems: 'center',
    backgroundColor: theme.colors.border,
    minWidth: 'auto',
    padding: '0.5rem 0.75rem',
  }),
  multiValueLabel: (styles: CSSProperties) => ({
    ...styles,
    fontSize: '0.875rem',
    paddingRight: '0.75rem',
  }),
  option: (styles: any, { isFocused, isSelected }: any) => ({
    ...styles,
    backgroundColor: isFocused ? theme.colors.primary : theme.colors.white,
    color: isFocused ? theme.colors.white : theme.colors.primaryText,
    cursor: 'pointer',
    fontWeight: isSelected ? '600' : '400',

    ':active': {
      ...styles[':active'],
      backgroundColor: theme.colors.primary,
      fontWeight: '600',
    },
  }),
  placeholder: (styles: CSSProperties) => ({
    ...styles,
    marginLeft: '0',
    marginRight: '0',
  }),
  singleValue: (styles: CSSProperties) => ({
    ...styles,
    color: theme.colors.primaryText,
    marginLeft: '0',
    marginRight: '0',
  }),
  valueContainer: (styles: CSSProperties) => ({
    ...styles,
    flexWrap: 'nowrap',
    padding: '0',
  }),
}

const SelectorIcon = styled(IconSelector)`
  --size: 24px;
`

const ClearIndicatorIcon = styled(IconClose)`
  --size: 24px;
`

export { ClearIndicatorIcon, SelectorIcon, selectStyles }
