import { Form, ListGroup } from "react-bootstrap";

function SelectableListItem(props) {
  return (
    <Form.Check type="checkbox" checked={props.isSelected}>
      <ListGroup.Item key={props.label}>
        <Form.Check.Input type="checkbox" isValid />
        <Form.Check.Label className="mx-2">{props.label}</Form.Check.Label>
      </ListGroup.Item>
    </Form.Check>
  );
}

export default SelectableListItem;
