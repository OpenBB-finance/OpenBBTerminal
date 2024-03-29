---
title: divcal
description: Guide to use divcal for acquiring dividend calendar for a selected date
  in the stock market. The parameters include date, sort, and reverse. The data includes
  Name, Symbol, Ex-Dividend date, Payment date, Record date, Dividend, and Annual
  Dividend.
keywords:
- divcal
- dividend calendar
- stock market
- ex-dividend date
- payment date
- record date
- annual dividend
- announcement date
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="stocks/disc/divcal - Reference | OpenBB Terminal Docs" />

Get dividend calendar for selected date

### Usage

```python
divcal [-d DATE] [-s {name,symbol,ex-dividend_date,payment_date,record_date,dividend,annual_dividend,announcement_date}] [-r]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| date | Date to get format for | datetime.now() | True | None |
| sort | Column to sort by | dividend | True | name, symbol, ex-dividend_date, payment_date, record_date, dividend, annual_dividend, announcement_date |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | False | True | None |


---

## Examples

```python
2022 Feb 16, 03:53 (🦋) /stocks/disc/ $ divcal
                                           Dividend Calendar for 2022-02-16
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━┳━━━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━━━━━━━━┓
┃ Name                         ┃ Symbol ┃ Ex-Dividend Date ┃ Payment Date ┃ Record Date ┃ Dividend ┃ Annual Dividend ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━━━━━━━━┩
│ Danaos Corporation           │ DAC    │ 02/16/2022       │ 02/28/2022   │ 02/17/2022  │ 0.75     │ 3.00            │
├──────────────────────────────┼────────┼──────────────────┼──────────────┼─────────────┼──────────┼─────────────────┤
│ Microsoft Corporation        │ MSFT   │ 02/16/2022       │ 03/10/2022   │ 02/17/2022  │ 0.62     │ 2.48            │
├──────────────────────────────┼────────┼──────────────────┼──────────────┼─────────────┼──────────┼─────────────────┤
│ Discover Financial Services  │ DFS    │ 02/16/2022       │ 03/03/2022   │ 02/17/2022  │ 0.50     │ 2.00            │
├──────────────────────────────┼────────┼──────────────────┼──────────────┼─────────────┼──────────┼─────────────────┤
│ Apartment Income REIT Corp.  │ AIRC   │ 02/16/2022       │ 02/25/2022   │ 02/17/2022  │ 0.45     │ 1.80            │
├──────────────────────────────┼────────┼──────────────────┼──────────────┼─────────────┼──────────┼─────────────────┤
│ Zions Bancorporation N.A.    │ ZION   │ 02/16/2022       │ 02/24/2022   │ 02/17/2022  │ 0.38     │ 1.52            │
├──────────────────────────────┼────────┼──────────────────┼──────────────┼─────────────┼──────────┼─────────────────┤
│ Southside Bancshares, Inc.   │ SBSI   │ 02/16/2022       │ 03/03/2022   │ 02/17/2022  │ 0.34     │ 1.36            │
├──────────────────────────────┼────────┼──────────────────┼──────────────┼─────────────┼──────────┼─────────────────┤
│ Fidelity D & D Bancorp, Inc. │ FDBC   │ 02/16/2022       │ 03/10/2022   │ 02/17/2022  │ 0.33     │ 1.32            │
├──────────────────────────────┼────────┼──────────────────┼──────────────┼─────────────┼──────────┼─────────────────┤
│ Xylem Inc.                   │ XYL    │ 02/16/2022       │ 03/17/2022   │ 02/17/2022  │ 0.30     │ 1.20            │
├──────────────────────────────┼────────┼──────────────────┼──────────────┼─────────────┼──────────┼─────────────────┤
│ D.R. Horton, Inc.            │ DHI    │ 02/16/2022       │ 02/25/2022   │ 02/17/2022  │ 0.23     │ 0.90            │
├──────────────────────────────┼────────┼──────────────────┼──────────────┼─────────────┼──────────┼─────────────────┤
│ CenterPoint Energy, Inc.     │ CNP    │ 02/16/2022       │ 03/10/2022   │ 02/17/2022  │ 0.17     │ 0.68            │
└──────────────────────────────┴────────┴──────────────────┴──────────────┴─────────────┴──────────┴─────────────────┘
```
---
