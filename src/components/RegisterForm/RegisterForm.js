import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../RegisterForm.css";

function RegisterForm() {
  return (
    <Form>
      <fieldset disabled>
        <Form.Group className="mb-3 form">
          <Form.Label htmlFor="disabledTextInput">Competition Name</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="conpetition name" />
        </Form.Group>
        <Form.Group className="mb-3 form">
          <Form.Label htmlFor="disabledTextInput">Email Address</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Email Address" />
        </Form.Group>
        <Form.Group className="mb-3 form">
          <Form.Label htmlFor="disabledSelect">Password </Form.Label>
          <Form.Control id="disabledTextInput" placeholder="password" />
          
        </Form.Group>
        <Form.Group className="mb-3 form ">
          <Form.Check 
            type="checkbox"
            id="disabledFieldsetCheck"
            label="I agree to terms & conditions"
          />
          
        </Form.Group>
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
  );
}

export default RegisterForm;