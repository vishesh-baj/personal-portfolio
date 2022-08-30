type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of Items</h2>
      {items.map((item, idx) => {
        return (
          <div key={idx} onClick={() => onClick(item)}>
            {/* <h1>{item}</h1> */}
          </div>
        );
      })}
    </div>
  );
};
