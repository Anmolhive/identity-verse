const multipleTitle = (id, titles = [], speed = 100, delay = 200) => {
    const maxWidth = titles.reduce((max, title) => Math.max(max, title.length), 0);
    let i = 0;

    setInterval(() => {
        const currentTitle = titles[i];
        document.getElementById(id).innerHTML = '';
        if (i >= titles.length - 1) {
            i = 0;
        } else {
            i++;
        }

        // Display each character of the current title
        for (let j = 0; j < currentTitle.length; j++) {
            setTimeout(() => {
                document.getElementById(id).innerHTML += currentTitle[j];
            }, speed * j);
        }
    }, (maxWidth * speed) + delay);
};