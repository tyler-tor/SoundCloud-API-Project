import { createContext, useContext, useRef, useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import './Modal.css';

export const ModalContext = createContext();

const ModalProvider = (props) => {
    const modalRef = useRef();
    const [value, setValue] = useState();

    useEffect(() => {
        setValue(modalRef.current);
    }, [])
    return (
        <>
            <ModalContext.Provider
                value={value}>
                {props.children}
            </ModalContext.Provider>
            <div
                ref={modalRef}>
            </div>
        </>
    )
};

export const Modal = ({ onClose, children }) => {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDom.createPortal(
        <div id="modal">
            <div id="modal-background" onClick={onClose} />
            <div id="modal-content">
                {children}
            </div>
        </div>,
        modalNode
    )
}

export default ModalProvider;
