import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContainerDiv = styled.div({
  maxWidth: '1280px',
  margin: '0 auto'
})

const Container = ({ style, className, children }) => {
  return (
    <ContainerDiv style={style} className={className}>
      {children}
    </ContainerDiv>
  )
}


Container.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string
}
export default Container