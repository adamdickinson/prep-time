import styled from 'styled-components';

export default styled.div`
  align-items: center;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 1rem 1.5rem;
  transition: 75ms background-color, 75ms box-shadow;

  span {
    display: flex;

    small {
      white-space: nowrap;
      flex: 0 0 auto;
      padding-top: 0.1875rem;
    }
  }

  svg {
    flex: 0 0 auto;
  }

  &.done {
    background: none;
    box-shadow: none;
    opacity: 0.5;
    text-decoration: line-through;
  }
`
