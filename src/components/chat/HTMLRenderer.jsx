import React, { useMemo } from 'react';
import DOMPurify from 'dompurify';

/**
 * Renders HTML content from the backend with "Prose Fintech" styling.
 * Applies sanitization while preserving structure for tables and buttons.
 */
const HTMLRenderer = ({ htmlContent }) => {
    const sanitizedHTML = useMemo(() => {
        // Configure DOMPurify to allow specific tags and attributes needed for tables and styling
        const config = {
            ADD_TAGS: ['table', 'thead', 'tbody', 'tr', 'td', 'th', 'a', 'h1', 'h2', 'h3', 'p', 'ul', 'ol', 'li', 'span', 'div', 'strong', 'em', 'br'],
            ADD_ATTR: ['class', 'style', 'href', 'target', 'rel'],
        };
        return DOMPurify.sanitize(htmlContent, config);
    }, [htmlContent]);

    return (
        <div
            className="prose-fintech max-w-none w-full"
            dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
        />
    );
};

export default HTMLRenderer;
