import { ListGroup } from "react-bootstrap";
import SelectableListItem from "../shared/selectable-list-item";

function SecondList(props) {
  const dummyList = Array(10)
    .fill("s")
    .map((_, i) => i + 1 + " Element - list 2");

  return (
    <ListGroup className="h-list overflow-auto thin-scroll">
      {dummyList.map((x) => (
        <SelectableListItem
          key={x}
          label={x}
          isSelected={props.selected.has(x)}
          onSelect={props.setSelections(x)}
        >
          {x}
        </SelectableListItem>
      ))}
    </ListGroup>
  );
}

export default SecondList;
