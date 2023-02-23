import styled from 'styled-components';

const FormInput = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  placeholder,
}) => {
  return (
    <Wrapper>
      <label htmlFor={name} className='formLabel'>
        {labelText || name}
      </label>
      <br />
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className='formInput'
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 1rem;
`;

export default FormInput;
