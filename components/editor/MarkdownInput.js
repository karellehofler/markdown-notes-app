import React, { useContext, useState } from "react";
import { NotesContext } from "../../context/NotesProvider";
import { ThemeContext } from "../../context/ThemeProvider";
import TextareaAutosize from "react-textarea-autosize";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

function MarkdownInput({ isDemo }) {
  const { selected, updateNote } = useContext(NotesContext);
  const { theme } = useContext(ThemeContext);
  const [demoContent, setDemoContent] = useState("");

  const textareaStyle = {
    background: "none",
    border: "none",
    height: "auto",
    resize: "none",
  };

  return (
    <div className="content-spacing">
      <form>
        <GrammarlyEditorPlugin clientId="client_DRsZGWAB7q1G44cNkgSv7f">
          <TextareaAutosize
            id="content"
            style={textareaStyle}
            minRows={1}
            value={isDemo ? demoContent : selected.content}
            onInput={
              isDemo
                ? (e) => setDemoContent(e.target.value)
                : (e) => updateNote(e)
            }
            className={`${theme.text.classStyle} textarea-input textarea-size`}
          />
        </GrammarlyEditorPlugin>
      </form>
    </div>
  );
}

export default MarkdownInput;