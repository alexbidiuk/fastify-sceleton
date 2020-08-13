export default {
  getBets: {
    query: {
      type: 'object',
      required: ['filter'],
      properties: {
        filter: { type: 'string' },
      },
    },
    response: {
      200: {
        description: 'Successful response',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            ID: { type: 'string' },
            AgentID: { type: 'string' },
            EmployeeID: { type: 'string' },
            Customer: {
              type: 'object',
              properties: {
                SiteID: { type: 'string' },
                CustomerID: { type: 'string' },
                CustomerLevel: { type: 'string' },
              },
            },
            Selections: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  SelectionID: { type: 'string' },
                  IsLive: { type: 'boolean' },
                  BranchName: { type: 'string' },
                  LeagueId: { type: 'string' },
                  LeagueName: { type: 'string' },
                  EventName: { type: 'string' },
                  Team1Name: { type: 'string' },
                  Team2Name: { type: 'string' },
                  MarketTypeName: { type: 'string' },
                  YourBet: { type: 'string' },
                  Result: { type: 'string' },
                  ClientOdds: { type: 'string' },
                },
              },
            },
            Bets: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  BetID: { type: 'string' },
                  StakeDecimal: { type: 'string' },
                  GainDecimal: { type: 'string' },
                  Odds: { type: 'string' },
                  DBOdds: { type: 'string' },
                  ClientOdds: { type: 'string' },
                  Dividend: { type: 'string' },
                  Divisor: { type: 'string' },
                  MaxBet: { type: 'object' },
                  IsLive: { type: 'string' },
                  NumberOfLines: { type: 'string' },
                  NumberOfBets: { type: 'string' },
                  ComboSize: { type: 'string' },
                  BetTypeID: { type: 'string' },
                  BetSubTypeID: { type: 'string' },
                  TaxPercent: { type: 'string' },
                },
              },
            },
          },
        },
      },
    },
  },
};
