import firebase from '../Firebase'

export const addTransfer = (transfer) => {
    try {
        return firebase.firestore().collection("transfers").doc(transfer.control_number).set({transfer})
    } catch (error) {
        console.log(error);
    }
}

export const getTransfers = async () => {
    try {
        return (await firebase.firestore().collection("transfers").get()).docs.map(doc => doc.data())
    } catch (error) {
        console.log(error);
    }
}

export const getTransfer = async ( control_number ) => {
    try {
        return (await firebase.firestore().collection("transfers").doc(control_number).get()).data()
    } catch (error) {
        console.log(error);
    }
}

export const deleteTransfer = async (transfer) => {
    try {
        const transferToDelete = await firebase.firestore().collection("transfers").doc(transfer).get()
        return await transferToDelete.ref.delete()
    } catch (error) {
        console.log(error);
    }
}

export const editTransfer = async ( transfer ) => {
    try {
        return firebase.firestore().collection("transfers").doc(transfer.control_number).update({transfer})
    } catch (error) {
        console.log(error);
    }
}