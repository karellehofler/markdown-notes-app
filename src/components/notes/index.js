import React, { useContext } from "react";
import CreateNoteButton from "../buttons/CreateNoteButton";
import { Block, Heading } from "react-bulma-components";
import { ThemeContext } from "../../context/ThemeProvider";
import { NotesContext } from "../../context/NotesProvider";
import { motion } from "framer-motion";

const initialOpacity = { opacity: 0 };
const animateOpacity = { opacity: 1 };
const opacityTransition = { ease: "easeIn", duration: 0.25 };

const NoteSummary = ({ data }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Block key={`note-${data.id}`}>
        <Block>
          <Heading
            renderAs="h2"
            style={{ display: "inline" }}
            className={`note-summary-title is-size-6 ${theme.text.className}`}
          >
            {data.title}
          </Heading>
        </Block>

        <small
          style={{ marginBottom: "1rem" }}
          className={`${theme.text.className} date-timestamp`}
        >
          {data.created_at}
        </small>
      </Block>
    </>
  );
};

const NotesList = () => {
  const { notes, getNote } = useContext(NotesContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      id="notes-init"
      className={`m-0 mt-4 p-4 ${theme.background.className} 
        is-widescreen is-flex-direction-column is-justify-content-center is-align-content-center`}
    >
      <motion.div
        initial={initialOpacity}
        animate={animateOpacity}
        transition={opacityTransition}
        className={`${theme.panel.className}  
            block
            is-flex is-align-self-center is-flex-direction-column p-4
            is-justify-content-center is-align-items-center`}
      >
        <div
          id="create-btn-init"
          style={{ width: "100%" }}
          className="is-flex-direction-row is-justify-content-flex-end mr-5"
        >
          <CreateNoteButton justifyContent={"flex-end"} />
        </div>
        <Heading renderAs="h1" className={`${theme.text.className} `}>
          Welcome
        </Heading>
        <Block
          style={{ width: "100%", padding: "0rem 2rem", overflowY: "scroll" }}
        >
          <ul className="note-summaries">
            {notes &&
              notes.map((note) => (
                <li className="menu-item" onClick={() => getNote(note.id)}>
                  <NoteSummary data={note} />
                </li>
              ))}
          </ul>
        </Block>
      </motion.div>
    </div>
  );
};

const NoNotesDetected = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      id="notes-init"
      className={`m-0 p-4 ${theme.background.className} } 
    is-widescreen is-flex-direction-column is-justify-content-center is-align-content-center`}
      style={{ height: "100%" }}
    >
      <motion.div
        initial={initialOpacity}
        animate={animateOpacity}
        transition={opacityTransition}
        className="block is-flex is-align-self-center is-flex-direction-column is-justify-content-center is-align-items-center"
      >
        <Heading
          renderAs="h2"
          className={`${theme.text.className}`}
          weight="semibold"
        >
          No Notes Yet.
        </Heading>
        <CreateNoteButton />
      </motion.div>
    </div>
  );
};

export { NoNotesDetected, NoteSummary, NotesList };
