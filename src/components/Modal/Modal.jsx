import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.css'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

function ModalInner({ closeHandler, children }) {
  useEffect(() => {
    const closeModalByEscape = (e) => {
      if (e.key === 'Escape') {
        closeHandler()
      }
    }

    document.addEventListener('keyup', closeModalByEscape)

    return () => {
      document.removeEventListener('keyup', closeModalByEscape)
    }
  }, [])

  const closeModalByClickIcon = () => {
    closeHandler()
  }

  return (
    <div className={styles.modalInner}>
      <FontAwesomeIcon
        icon={faCircleXmark}
        onClick={closeModalByClickIcon}
        className={styles.closeIcon}
      />
      {children}
    </div>
  )
}

export const Modal = ({ isOpen, closeHandler, children }) => {
  if (!isOpen) {
    return null
  }

  const closeModalByClickWrapper = (e) => {
    if (e.target === e.currentTarget) {
      closeHandler()
    }
  }

  return createPortal(
    <div onClick={closeModalByClickWrapper} className={styles.modalWr}>
      <ModalInner closeHandler={closeHandler}>{children}</ModalInner>
    </div>,
    document.getElementById('modal-root')
  )
}
