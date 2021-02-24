import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { INVENTORY_ADD_ACTION } from '../../config/const/settings';
import { INVENTORY_OBJECTS } from '../../config/const/inventory';
import { MAP_TILES } from '../../config/const/tiles';
import { DIALOGUE } from '../../config/const/dialogue';

export default function PopUpInteraction({closeDialog, objectdata}) {

    const dispatch = useDispatch();

    const [objectTaken, setObjectTaken] = useState(false);

    const typeObject = MAP_TILES[objectdata.id].type;
    var objectInfo;

    if(typeObject==='panneau') {
        objectInfo = DIALOGUE[objectdata.id];
    } else {
        objectInfo = INVENTORY_OBJECTS[objectdata.id];
    }

    const [indexDialogue, setIndexDialogue] = useState(0);

    function addObject() {
        if(typeObject==='coffre') {
            dispatch({
                type: INVENTORY_ADD_ACTION,
                payload: INVENTORY_OBJECTS[objectInfo.associatedKey]
            });
        } else if(typeObject==='objet') {
            dispatch({
                type: INVENTORY_ADD_ACTION,
                payload: INVENTORY_OBJECTS[objectInfo.id]
            });
        }
        setObjectTaken(true);
    }

    if(typeObject==='objet' || typeObject==='coffre') {
        return(
            <div className='tools-panel' id='interaction'>
                <button className="panel-button" onClick={() => closeDialog()}>x</button>
                {objectTaken ? (
                    <>
                        {(typeObject==='coffre') ? (
                            <p>Bravo ! Vous possédez désormais la clé permettant d'ouvrir la prochaine porte !</p>
                        ) : (
                            <p>Bravo ! Vous possédez désormais l'objet "{objectdata.name}" !</p>
                        )}
                        
                    </>
                ) : (
                    <>
                    <p>{objectInfo.description}</p>
                    {objectInfo.pickable &&
                        <>
                            {!(typeObject==='coffre') && <p>Voulez-vous l'ajouter dans l'inventaire ?</p>}
                            <div>
                                <button onClick={() => addObject()}>Oui</button>
                                <button onClick={() => closeDialog()}>Non</button>
                            </div>
                        </>
                    }
                    </>
                )}
            </div>
        );
    } else if(typeObject==='panneau') {

        const dialogues = objectInfo.description;
        const currentDialogue = dialogues[indexDialogue];
        const isLastDialogue = currentDialogue.yes.next==null;
        const noAvailable = currentDialogue.no!==null;

        return(
            <div className='tools-panel' id='interaction'>
                <button className="panel-button" onClick={() => closeDialog()}>x</button>
                <p>{currentDialogue.text}</p>
                <div>
                    {isLastDialogue ? (
                        <button onClick={() => closeDialog()}>{currentDialogue.yes.text}</button>
                    ) : (
                        <>
                            <button onClick={() => setIndexDialogue(currentDialogue.yes.next)}>{currentDialogue.yes.text}</button>
                            {noAvailable && <button onClick={() => setIndexDialogue(currentDialogue.no.next)}>{currentDialogue.no.text}</button>}
                        </>
                    )}
                </div>
            </div>
        );
    } else {
        return(
            <div>

            </div>
        );
    } 
}