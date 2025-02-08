import { useState } from "react";

const EditableText = ({ initialText }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);

  const handleBlur = () => setIsEditing(false);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") setIsEditing(false);
  };

  return isEditing ? (
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      autoFocus
    />
  ) : (
    <span onClick={() => setIsEditing(true)} style={{ cursor: "pointer" }}>
      {text}
    </span>
  );
};

export default EditableText;
