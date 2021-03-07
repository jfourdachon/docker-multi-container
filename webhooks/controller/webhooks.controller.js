const { createUserService } = require("../service/user.service");


exports.createFreeSomaUser = async (req, res) => {
    const { member_email, member_name, offer_title} = req.body;
    const newUser = {
        email: member_email,
        username: member_name,
        hygieOffer: offer_title
    }
    try {
        await createUserService(newUser)
        return res.status(200).end();

    } catch (error) {
        throw Error(error)
    }
}

exports.createFreeGoldenRulesUser = async (req, res) => {
    const { member_email, member_name, offer_title} = req.body;
    const newUser = {
        email: member_email,
        username: member_name,
        hygieOffer: offer_title
    }
    try {
        await createUserService(newUser)
        return res.status(200).end();

    } catch (error) {
        throw Error(error)
    }
}