import React from 'react'

import classNames from 'classnames'
import PropTypes from 'prop-types'

import useHover from "../../../hooks/useHover";

import './style.css'

const Button = ({ variant, label, children, search, onClick, ...props }) => {
  const [hoverRef, isHovered] = useHover()

  return (
    <>
      <button
        className={classNames(
          'btn',
          {
            [`btn-${variant}`]: true,
            'btn-search': search,
          }
        )}
        ref={hoverRef}
        onClick={onClick}
        {...props}
      >
        {search && <img className={ isHovered ? 'btn-icon' : 'btn-icon-hover' } alt='search-icon' />}
        {label ?? children ?? 'Button'}
      </button>
    </>
  )
}

Button.defaultProps = {
  variant: 'medium',
  search: false,
}

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
  search: PropTypes.bool,
}

export default Button;