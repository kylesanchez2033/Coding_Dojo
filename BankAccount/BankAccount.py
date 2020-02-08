class BankAccount:

    def __init__(self, balance, int_rate):
        self.int_rate = int_rate
        self.account_balance = balance

    def deposit(self, amount):
        self.account_balance = self.account_balance + amount

    def withdraw(self, amount):
        self.account_balance = self.account_balance - amount

    def display_account_info(self):
        print(self.account_balance)

    def yield_interest(self):
        if self.account_balance > 0:
            self.account_balance = self.account_balance * self.int_rate
            print(self.account_balance)


# my_account = BankAccount(300)

# my_account.display_account_info()
# my_account.yield_interest()
# my_account.display_account_info()
