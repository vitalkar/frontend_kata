import { makeAutoObservable } from "mobx";

const users = [
    {
        id: 0,
        data: {    
            firstname: 'sandra',
            lastname: 'smith',
            email: 'invision@invisionapp.com',
            phone: '+144-3412-4422',
            location: 'new york, NY',
            interactions: 4,
            places: {
                startName: 'jackson heights',
                startAddress: '37-27 74th street',
                endName: 'greenpoint',
                endAddress: '81 gate st brooklyn'
            },
            stats: {
                distance: 12.3,
                time: 42,
                price: 34.20,
                energy: 12.4
            },
            settings: {
                hideInfo: false,
                chosenPaymentAlt: 0,
            }
        }
    },
    {   
        id: 1, 
        data: {
            firstname: 'sandra',
            lastname: 'smith',
            email: 'invision@invisionapp.com',
            phone: '+144-3412-4422',
            location: 'new york, NY',
            interactions: 4,
            places: {
                startName: 'jackson heights',
                startAddress: '37-27 74th street',
                endName: 'greenpoint',
                endAddress: '81 gate st brooklyn'
            },
            stats: {
                distance: 12.3,
                time: 42,
                price: 34.20,
                energy: 12.4
            },
            settings: {
                hideInfo: false,
                chosenPaymentAlt: 0,
            }
        }
    },
    {   
        id: 2, 
        data: {
            firstname: 'sandra',
            lastname: 'smith',
            email: 'invision@invisionapp.com',
            phone: '+144-3412-4422',
            location: 'new york, NY',
            interactions: 4,
            places: {
                startName: 'jackson heights',
                startAddress: '37-27 74th street',
                endName: 'greenpoint',
                endAddress: '81 gate st brooklyn'
            },
            stats: {
                distance: 12.3,
                time: 42,
                price: 34.20,
                energy: 12.4
            },
            settings: {
                hideInfo: false,
                chosenPaymentAlt: 0,
            }
        }
    },
];

const paymentAlternatives = [
    { id: 0, text: 'visa' },
    { id: 1, text: 'mastercard' },
    { id: 2, text: 'applepay' },
    { id: 3, text: 'paypal' },
];

export default class AppStore {
    users;
    paymentAlts;
    constructor() {
        makeAutoObservable(this);
        this.users = users;
        this.paymentAlts = paymentAlternatives;
        console.log(typeof this.users);
        console.log(this.users);
    }

    getUser(id) {
        return this.users.find(user => user.id === id);
    }
}

