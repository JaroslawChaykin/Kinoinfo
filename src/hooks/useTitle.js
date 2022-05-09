import { useEffect, useState } from 'react';

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);

    if (document.title !== initialTitle) document.title = initialTitle;

    useEffect(() => {
        document.title = title
    }, [title]);
}

export default useTitle