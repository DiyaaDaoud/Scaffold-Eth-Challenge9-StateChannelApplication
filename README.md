# 🏗 scaffold-eth | 🏰 BuidlGuidl

## 🚩 Challenge 9: A State Channel Application


this Repo is mainly following [SpeedRunEthereum](https://speedrunethereum.com/challenge/state-channels) challenge 9: building a state channel application.

you can start with this branch of [Scaffold-Eth challenges](https://github.com/scaffold-eth/scaffold-eth-challenges/tree/challenge-9-state-channels) then follow the ReadMe for more details.

>the objective is:
  1- understand state channels functionalities
  2- follow the check points in the main chalenge repo.
  3- try to kick the side quests

> this app will allow a Rube to open a one-way chanel with Guru, by funding with sime ETH balance (this transaction is on-chain). Guru will then send wisdom in exchange for little payments (each letter for 0.001 ETH for example), and all of this is done off-chain.
then, Guru can snd the latest voucher to the main contract on-chain, so he can get what he deserves of payments.
if a Rube wants to close a channel and get what he has left of his balance, he can open a challenge window for some sprecific time, so Guru will be able to submit his lates voucher before the channel is closed. this process will keep Guru's rights saved and prevent any Rube from closing the channel without keeping up to his payments.

> In our work:
  1- when the Rube's balanc is over, we cut off the service.
  2- when Rube challenges a channel, the latest voucher will automatically be cashed to save the rights of Guru.
