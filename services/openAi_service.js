const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);



const generateImage = async (req, res) => {
    const { prompt, size } = req.body;
    console.log(openai)
    const imageSize = size == 'small' ? '256x256' : size == 'medium' ? '512x512' : '1024x1024';
    try {
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: imageSize
        })
        //console.log(response);
        res.status(200).send({
            data:response.data.data[0].url});
    } 
    catch (err) {
        res.status(400).send('image can not provided');
    }

}

module.exports = { generateImage };