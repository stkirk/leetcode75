import {
  calculateMonthlySubscriptionCharge,
  User,
  Subscription,
  numberOfDaysInAMonth,
} from "../../woven/calculateMonthlySubscriptionCharge";

const users: User[] = [
  {
    id: 1,
    name: "Employee #1",
    activatedOn: new Date("2019-01-01"),
    deactivatedOn: null,
    customerId: 1,
  },
  {
    id: 2,
    name: "Employee #2",
    activatedOn: new Date("2019-01-01"),
    deactivatedOn: null,
    customerId: 1,
  },
];

const plan: Subscription = {
  id: 1,
  customerId: 1,
  monthlyPriceInCents: 5000,
};

describe("monthlyCharge", () => {
  it("works when both users are deactivated after end of month", () => {
    const expectedUserCount = 2;
    const usersActiveOn16th = users.map((user) => {
      return {
        ...user,
        deactivatedOn: new Date("2020-12-01"),
      };
    });
    // console.log({ usersActiveOn16th });
    expect(
      calculateMonthlySubscriptionCharge("2020-11", plan, usersActiveOn16th)
    ).toBeCloseTo(expectedUserCount * 5000);
  });
  it("works when users are activate after input month", () => {
    expect(
      calculateMonthlySubscriptionCharge("2018-10", plan, users)
    ).toBeCloseTo(0);
  });

  it("works when there is no subscription", () => {
    expect(
      calculateMonthlySubscriptionCharge("2020-12", null, users)
    ).toBeCloseTo(0);
  });

  it("works when there are no users", () => {
    expect(calculateMonthlySubscriptionCharge("2020-12", plan, [])).toBeCloseTo(
      0
    );
  });

  it("works when the active users are active the entire month", () => {
    const expectedUserCount = 2;
    expect(
      calculateMonthlySubscriptionCharge("2020-12", plan, users)
    ).toBeCloseTo(expectedUserCount * 5000);
  });
  it("works when the users are deactivated on the 1st of the month", () => {
    const expectedUserCount = 2;
    const usersDeactivatedOn1st = users.map((user) => {
      return {
        ...user,
        deactivatedOn: new Date(2020, 10, 1),
      };
    });
    expect(
      calculateMonthlySubscriptionCharge("2020-11", plan, usersDeactivatedOn1st)
    ).toBeCloseTo(Math.round(expectedUserCount * 1 * (5000 / 30)));
  });
  it("works when the users are activated on the 1st of the month", () => {
    const expectedUserCount = 2;
    const usersActiveOn1st = users.map((user) => {
      return {
        ...user,
        activatedOn: new Date("2020-11-01"),
      };
    });
    expect(
      calculateMonthlySubscriptionCharge("2020-11", plan, usersActiveOn1st)
    ).toBeCloseTo(expectedUserCount * 5000);
  });
  it("works when both users are activated mid month", () => {
    const expectedUserCount = 2;
    const usersActiveOn16th = users.map((user) => {
      return {
        ...user,
        activatedOn: new Date(2020, 10, 16),
      };
    });
    console.log({ usersActiveOn16th, manualDate: new Date(2020, 10, 16) });
    expect(
      calculateMonthlySubscriptionCharge("2020-11", plan, usersActiveOn16th)
    ).toBeCloseTo(expectedUserCount * 2500);
  });
  it("works when both users are activated and deactivated mid month", () => {
    const expectedUserCount = 2;
    const usersActiveOn15th = users.map((user) => {
      return {
        ...user,
        activatedOn: new Date("2020-11-16"),
        deactivatedOn: new Date("2020-11-21"),
      };
    });
    // console.log({ usersActiveOn15th });
    expect(
      calculateMonthlySubscriptionCharge("2020-11", plan, usersActiveOn15th)
    ).toBeCloseTo(expectedUserCount * 1000);
  });
});

describe("helper functions for monthly charge", () => {
  it("returns correct number of days for month with 31", () => {
    expect(numberOfDaysInAMonth(2023, 12)).toBe(31);
  });
  it("returns correct number of days for month with 30", () => {
    expect(numberOfDaysInAMonth(2023, 4)).toBe(30);
  });
  it("returns correct number of days for February non leap year", () => {
    expect(numberOfDaysInAMonth(2023, 2)).toBe(28);
  });
  it("returns correct number of days for February in leap year", () => {
    expect(numberOfDaysInAMonth(2024, 2)).toBe(29);
  });
});
