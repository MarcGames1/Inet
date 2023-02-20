import React, {useState, useEffect} from 'react'
import dynamic from 'next/dynamic'
const PopupModal = dynamic(() => import('react-calendly').then(c => c.PopupModal), {
    loading: () => <div>Loading...</div>,
})
import Button from '../../components/button';
const CalendlyButton = ({primary, text, modifier, pulse, color} ) => {

    
    const [isOpen, setIsOpen] = useState(false)
    const [pageSettings, setPageSettings] = useState({
        backgroundColor: 'ffffff',
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: '4f46e5',
        textColor: '1f2927',
        hideGdprBanner: true,
    }
)
const [rootElement, setRootElement] = useState(null)

useEffect(()=>{
    if (typeof window !== 'undefined' && document){
        setRootElement(document.getElementById("__next"))
    }
}, [typeof window !== 'undefined'])

    return (
        <div>
            <Button
                pulse={pulse ? pulse : false}
                primary={!primary ? true : primary}
                onClick={() => setIsOpen(true)}
                modifier={modifier}
                color={color || undefined}
                
            >
                {!text ? 'Programeaza o Intalnire' : text}
            </Button>
            <PopupModal
                url="https://calendly.com/alexandru-marcu/consultanta-seo?primary_color=4f46e5"
                pageSettings={pageSettings}
                onModalClose={() => setIsOpen(false)}
                open={isOpen}
                /*
                 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                 */
                rootElement={rootElement}
            />
        </div>
    );
}

export default CalendlyButton