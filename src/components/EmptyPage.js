import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import './../styles/mixin.scss';


const EmptyPage = ({ count, style, children }) => {
  const Page = styled.div({
    width: '100%',
    height: props => (`${props.height}00vh`),
    background: '#eeeeee',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  })
  return (
    <Page style={style} height={(count || count === 0) || 1}>
      <di className='Head'>{children}</di>
    </Page>
  )
}
EmptyPage.propTypes = {
  count: PropTypes.number,
  style: PropTypes.object,
}

export default EmptyPage