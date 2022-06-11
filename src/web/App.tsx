import React, { useState, useEffect } from "react";
import { AppContext } from "./Context";
import { Synth, start } from "Tone";
import useGlobals from './Hooks/use-globals';
import "./App.css";

export const App = () => {
  const {toneStarted, setToneStarted} = useGlobals();
  return (
    <AppContext.Provider value={useGlobals()}>
      <div className="container">
        <div>
          {toneStarted ? <></> : (
            <button
              onClick={async () => {
                await start();
                setToneStarted(true);
                const synth = new Synth().toDestination();
                synth.triggerAttackRelease("c4", "8n");
              }}
            >
              Start
            </button>
          )}
        </div>
      </div>
    </AppContext.Provider>
  );
};
