const { createUserService } = require("../service/user.service");


exports.createFreeSomaUser = async (req, res) => {
    const { member_email, member_name, offer_title, offer_id} = req.body.payload;
    const newUser = {
        email: member_email,
        username: member_name,
        hygieOffer: offer_title,
        offerId: offer_id
    }
    try {
        await createUserService(newUser)
        return res.status(200).end();

    } catch (error) {
        throw Error(error)
    }
}

exports.createFreeGoldenRulesUser = async (req, res) => {
    const { member_email, member_name, offer_title, offer_id} = req.body.payload;
    const newUser = {
        email: member_email,
        username: member_name,
        hygieOffer: offer_title,
        offerId: offer_id
    }
    try {
        await createUserService(newUser)
        return res.status(200).end();

    } catch (error) {
        throw Error(error)
    }
}