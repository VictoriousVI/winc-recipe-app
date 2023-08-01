import { Tag } from "@chakra-ui/react";

export const TagList = ({ labelList, ...props }) => {
  return (
    <>
      {labelList.map((label) => (
        <Tag key={label} {...props}>
          {label}
        </Tag>
      ))}
    </>
  );
};
