//text editor component
import "draft-js/dist/Draft.css";

import ReactQuill from "react-quill";
import { useState, useEffect, useRef } from "react";
import "react-quill/dist/quill.snow.css";
import Mousetrap from "mousetrap";

import Keyboard from "./KeyBoard";
import ColorBtn from "./ColorBtn";

function TextEditor() {
  const [language, setLanguage] = useState("en");
  const [shift, setShift] = useState(false);
  const [keyboardLayout, setKeyboardLayout] = useState("en");
  const [editorValue, setEditorValue] = useState("");
  const [color, setColor] = useState("black");

  const handleKeyPress = (value) => {
    setEditorValue(`${editorValue} ${value}`);
  };
  const editorRef = useRef(null);

  useEffect(() => {
    // set up keyboard shortcuts
    Mousetrap.bind("mod+b", handleBold);
    Mousetrap.bind("mod+i", handleItalic);
    Mousetrap.bind("mod+u", handleUnderline);

    // clean up keyboard shortcuts
    return () => {
      Mousetrap.unbind("mod+b");
      Mousetrap.unbind("mod+i");
      Mousetrap.unbind("mod+u");
    };
  }, []);

  useEffect(() => {
    // update keyboard layout based on language
    if (language === "he") {
      setKeyboardLayout("he");
    } else {
      setKeyboardLayout("en");
    }
  }, [language]);

  useEffect(() => {
    //set different color for the selected text in the editor according to the color of the button
    setColor(color);
  }, [color]);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  const handleBold = () => {
    const editor = editorRef.current.getEditor();
    const selection = editor.getSelection();
    if (selection !== null) {
      const [startIndex, endIndex] = [
        selection.index,
        selection.index + selection.length,
      ];
      editor.formatText(startIndex, endIndex - startIndex, { bold: true });
    }
  };

  const handleItalic = () => {
    const editor = editorRef.current.getEditor();
    const selection = editor.getSelection();
    if (selection !== null) {
      const [startIndex, endIndex] = [
        selection.index,
        selection.index + selection.length,
      ];
      editor.formatText(startIndex, endIndex - startIndex, { italic: true });
    }
  };

  const handleUnderline = () => {
    const editor = editorRef.current.getEditor();
    const selection = editor.getSelection();
    if (selection !== null) {
      const [startIndex, endIndex] = [
        selection.index,
        selection.index + selection.length,
      ];
      editor.formatText(startIndex, endIndex - startIndex, {
        underline: true,
      });
    }
  };

  return (
    <div>
      <label htmlFor="language">Language:</label>
      <select id="language" value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="he">Hebrew</option>
      </select>
      <ReactQuill
        ref={editorRef}
        modules={{
          toolbar: [["bold", "italic", "underline"]],
        }}
        theme="snow"
        value={editorValue}
        onChange={handleEditorChange}
        language={language}
        dir={language === "he" ? "rtl" : "ltr"}
      />
      <Keyboard
        onKeyPress={handleKeyPress}
        layout={keyboardLayout}
        language={language}
      />

      <ColorBtn color={"red"} />
      <ColorBtn color={"blue"} />
      <ColorBtn color={"green"} />
      <ColorBtn color={"yellow"} />
    </div>
  );
}

export default TextEditor;
