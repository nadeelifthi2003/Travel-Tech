'use client'
import React, { useState } from 'react';

function NFCActions() {
  const [logMessages, setLogMessages] = useState<string[]>([]);

  // Function to handle click event for scan button
  const handleScan = async () => {
    console.log("User clicked scan button");
    addToLog("> Scan started");
    try {
      const ndef = new NDEFReader();
      await ndef.scan();

      ndef.addEventListener("readingerror", () => {
        addToLog("Argh! Cannot read data from the NFC tag. Try another one?");
      });

      ndef.addEventListener("reading", (event) => {
        const { data } = event as MessageEvent;
        if (data) {
          const { message, serialNumber } = data;
          addToLog(`> Serial Number: ${serialNumber}`);
          addToLog(`> Records: (${message ? message.records.length : 0})`);
        } else {
          addToLog("Argh! No data received from NFC tag.");
        }
      });
    } catch (error) {
      addToLog("Argh! " + error);
    }
  };

  // Function to handle click event for write button
  const handleWrite = async () => {
    console.log("User clicked write button");
    addToLog("> Message written");
    try {
      const ndef = new NDEFReader();
      await ndef.write("Hello world!");
    } catch (error) {
      addToLog("Argh! " + error);
    }
  };

  // Function to handle click event for make read-only button
  const handleMakeReadOnly = async () => {
    console.log("User clicked make read-only button");
    addToLog("> NFC tag has been made permanently read-only");
    try {
      const ndef = new NDEFReader();
      await ndef.makeReadOnly();
    } catch (error) {
      addToLog("Argh! " + error);
    }
  };

  // Function to add log messages
  const addToLog = (message: string) => {
    console.log(message);
    setLogMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div className='flex flex-col items-center justify-center gap-4 h-screen'>
      <button className='border-2 p-4 rounded-xl' onClick={handleScan}>Scan NFC Tag</button>
      <button className='border-2 p-4 rounded-xl' onClick={handleWrite}>Write to NFC Tag</button>
      <button className='border-2 p-4 rounded-xl' onClick={handleMakeReadOnly}>Make NFC Tag Read-only</button>
    </div>
  );
}

export default NFCActions;
