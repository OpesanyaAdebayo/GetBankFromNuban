# GetBankFromNuban
Get a list of banks an account number number likely belongs to, along with their bank codes.

## How does it work?
The Central Bank of Nigeria released the [guidelines on Nigeria Uniform Bank Account Number(NUBAN) scheme](https://www.cbn.gov.ng/OUT/2011/CIRCULARS/BSPD/NUBAN%20PROPOSALS%20V%200%204-%2003%2009%202010.PDF) in August, 2010.
The proposal contains the algorithm for account number generation, and that is what is implemented in this project.

## Running the application in repl.it
If you want to see it in action without downloading, please visit [repl.it](https://repl.it/@opesanyaadebayo/AdorableIncompatibleDesigns) and run `index.ts`.

## Running the application locally
1. Clone this repository

    `git clone https://github.com/OpesanyaAdebayo/GetBankFromNuban.git`


2. Run the application: You can add the following at the bottom of `src/getBanks.ts`
    
    `console.log(getPossibleBanks('<Any Valid Bank Account Number>'));`

    then install dependencies:

    `npm install`
    
    and then run

    `npm start`

    you should see an array of banks the account number likely belongs to, as well as their bank codes logged to the console.



## Test
1. Install dependencies

    `npm install`

2. Run `npm test`