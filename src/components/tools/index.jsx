import React, { useState } from 'react';
import './Tools.css';
import { connect } from 'react-redux';
import { InventoryStore } from '../inventory/';
import Help from '../help/';
import useKeyPress from '../../hooks/use-key-pressed/';
import PopUpInteraction from '../interaction/';

function Overlay(props) {
    return(
      <div id='overlay'
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundColor: 'rgba(0, 0, 0, .5)'
        }}
      ></div>
    )
  }

export default function ToolsPanel({dispatch,interaction}) {

    const [helpNeeded, setHelpNeeded] = useState(false);
    const [inventoryNeeded, setInventoryNeeded] = useState(false);
    const [interactNeeded, setInteractNeeded] = useState(false);

    const resetBoolean = () => {
      setHelpNeeded(false);
      setInventoryNeeded(false);
      setInteractNeeded(false);
    };

    useKeyPress((e) => {
        if(e.key === 'h') {
          resetBoolean();
          setHelpNeeded(!helpNeeded)
        }
        if(e.key === 'i') {
          resetBoolean();
          setInventoryNeeded(!inventoryNeeded)
        }
        if(e.key === 'm') {
          resetBoolean();
          setInteractNeeded(!interactNeeded)
        }
        e.preventDefault();
      });

    return(
        <div className='tools'>
          {helpNeeded && <Help><button className="panel-button" onClick={() => setHelpNeeded(false)}>x</button></Help>}
          {inventoryNeeded && <InventoryStore><button className="panel-button" onClick={() => setInventoryNeeded(false)}>x</button></InventoryStore>}
          {(interactNeeded && interaction.interact) && <PopUpInteraction objectdata={interaction}><button className="panel-button" onClick={() => setInteractNeeded(false)}>x</button></PopUpInteraction>}
          <button className="tools-button" onClick={()=>setInteractNeeded(!interactNeeded)}>Interagir [M]</button>
          <button className="tools-button" onClick={()=>setHelpNeeded(true)}>Help [H]</button>
          <button className="tools-button" onClick={()=>setInventoryNeeded(true)}>Inventaire [I]</button>
          {(helpNeeded || inventoryNeeded) && <Overlay/>}
        </div>
    )
}

function mapStateToProps(state) {
    return {interaction: state.interaction}
}

export const Tools = connect(mapStateToProps)(ToolsPanel)