let Bottombar = {
    render: async () => {
        let view =  /*html*/`
        <footer class="footer">
            <div class="content has-text-centered">
                <p>
                    This is my foot. There are many like it, but this one is mine.
                </p>
            </div>
        </footer>
        `
        return view
    },
    after_render: async () => { }

}

export default Bottombar;