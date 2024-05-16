import { Fragment, useState } from "react";
// <> is fragment shorthand
interface ListGroupProps {
    items: string[];
    heading: string;
    // (item of type string (item: string)) => void

    onSelectItem: (item: string) => void;

}
function ListGroup({items, heading, onSelectItem}: ListGroupProps) {

  //highlighting lines

  const [selectedIndex, setSelectedIndex] = useState(-1);
    //event handler

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found para</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => {setSelectedIndex(index);
                onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
