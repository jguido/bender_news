const createErrorAttachment = (error) => {
    return {
        color: 'danger',
        text: `Error:\n${error.message}`
    };
};

const createSuccessAttachment = (feed) => {
    return {
        title: `${feed.title}`,
        link: `${feed.link}`,
        author_name: feed.author,
        author_icon: feed.image,
        ts:parseInt(feed.date.getTime()/1000)
    };
};

const createAttachment = (result) => {
    if (result.constructor === Error) {
        return createErrorAttachment(result)
    }

    return createSuccessAttachment(result)
};

const postProcess = (data) => {
    return data.constructor === Array ? data : [data];
};


class Component
{
    /**
     *
     * @param body
     * @return {Promise}
     */
    render(body){}

    generateResponse(body) {
        return this.render(body).then(a =>  {

            const data = postProcess(a);

            return data.map(createAttachment);
        });

    }

}



module.exports = Component;