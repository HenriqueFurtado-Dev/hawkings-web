import React, { useEffect } from 'react';

function Watson() {
    useEffect(() => {
        window.watsonAssistantChatOptions = {
            integrationID: "3e865a86-3758-4f9e-b299-3a23fbb33a31", // The ID of this integration.
            region: "us-south", // The region your integration is hosted in.
            serviceInstanceID: "35d7b59c-60d7-493e-85c6-fcdf7d7ae3c9", // The ID of your service instance.
            onLoad: async (instance) => { await instance.render(); }
        };

        const script = document.createElement('script');
        script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
        document.head.appendChild(script);

        return () => {
            // Clean up the script tag when the component unmounts
            document.head.removeChild(script);
        };
    }, []);

    return null; // Este componente não renderiza nada diretamente
}

export default Watson;
