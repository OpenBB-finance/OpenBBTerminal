"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8113],{70867:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var n=r(74848),s=r(28453),i=r(94331),a=r(18228),o=r(19365);const c={title:"company_facts",description:"Copmare reported company facts and fundamental data points",keywords:["equity","compare","company_facts"]},d=void 0,l={id:"platform/reference/equity/compare/company_facts",title:"company_facts",description:"Copmare reported company facts and fundamental data points",source:"@site/content/platform/reference/equity/compare/company_facts.md",sourceDirName:"platform/reference/equity/compare",slug:"/platform/reference/equity/compare/company_facts",permalink:"/platform/reference/equity/compare/company_facts",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/equity/compare/company_facts.md",tags:[],version:"current",frontMatter:{title:"company_facts",description:"Copmare reported company facts and fundamental data points",keywords:["equity","compare","company_facts"]},sidebar:"tutorialSidebar",previous:{title:"Compare",permalink:"/platform/reference/equity/compare/"},next:{title:"groups",permalink:"/platform/reference/equity/compare/groups"}},u={},h=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function m(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"equity/compare/company_facts - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Copmare reported company facts and fundamental data points."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.equity.compare.company_facts(provider='sec')\nobb.equity.compare.company_facts(provider='sec', fact='PaymentsForRepurchaseOfCommonStock', year=2023)\nobb.equity.compare.company_facts(provider='sec', symbol='NVDA,AAPL,AMZN,MSFT,GOOG,SMCI', fact='RevenueFromContractWithCustomerExcludingAssessedTax', year=2024)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(o.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): sec."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fact"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The fact to lookup, typically a GAAP-reporting measure. Choices vary by provider."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['sec']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: sec."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(o.A,{value:"sec",label:"sec",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): sec."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fact"}),(0,n.jsx)(t.td,{children:"Literal['AccountsPayableCurrent', 'AccountsReceivableNet', 'AccountsReceivableNetCurrent', 'AccrualForTaxesOtherThanIncomeTaxesCurrent', 'AccrualForTaxesOtherThanIncomeTaxesCurrentAndNoncurrent', 'AccruedIncomeTaxesCurrent', 'AccruedIncomeTaxesNoncurrent', 'AccruedInsuranceCurrent', 'AccruedLiabilitiesCurrent', 'AccumulatedDepreciationDepletionAndAmortizationPropertyPlantAndEquipment', 'AccumulatedOtherComprehensiveIncomeLossNetOfTax', 'AcquisitionsNetOfCashAcquiredAndPurchasesOfIntangibleAndOtherAssets', 'AdjustmentsToAdditionalPaidInCapitalSharebasedCompensationRequisiteServicePeriodRecognitionValue', 'AdvertisingExpense', 'AllocatedShareBasedCompensationExpense', 'AntidilutiveSecuritiesExcludedFromComputationOfEarningsPerShareAmount', 'Assets', 'AssetsCurrent', 'AssetsNoncurrent', 'NoncurrentAssets', 'AssetImpairmentCharges', 'BuildingsAndImprovementsGross', 'CapitalLeaseObligationsCurrent', 'CapitalLeaseObligationsNoncurrent', 'Cash', 'CashAndCashEquivalentsAtCarryingValue', 'CashCashEquivalentsAndShortTermInvestments', 'CashCashEquivalentsRestrictedCashAndRestrictedCashEquivalents', 'CashCashEquivalentsRestrictedCashAndRestrictedCashEquivalentsIncludingDisposalGroupAndDiscontinuedOperations', 'CashCashEquivalentsRestrictedCashAndRestrictedCashEquivalentsPeriodIncreaseDecreaseIncludingExchangeRateEffect', 'CommitmentsAndContingencies', 'CommercialPaper', 'CommonStockDividendsPerShareDeclared', 'CommonStockDividendsPerShareCashPaid', 'CommonStocksIncludingAdditionalPaidInCapital', 'ComprehensiveIncomeNetOfTax', 'ComprehensiveIncomeNetOfTaxAttributableToNoncontrollingInterest', 'ComprehensiveIncomeNetOfTaxIncludingPortionAttributableToNoncontrollingInterest', 'ConstructionInProgressGross', 'ContractWithCustomerAssetNet', 'ContractWithCustomerLiability', 'ContractWithCustomerLiabilityCurrent', 'ContractWithCustomerLiabilityNoncurrent', 'CostOfRevenue', 'CostOfGoodsAndServicesSold', 'CurrentFederalTaxExpenseBenefit', 'CurrentForeignTaxExpenseBenefit', 'CurrentIncomeTaxExpenseBenefit', 'CurrentStateAndLocalTaxExpenseBenefit', 'DebtInstrumentFaceAmount', 'DebtInstrumentFairValue', 'DebtLongtermAndShorttermCombinedAmount', 'DeferredFederalIncomeTaxExpenseBenefit', 'DeferredForeignIncomeTaxExpenseBenefit', 'DeferredIncomeTaxExpenseBenefit', 'DeferredIncomeTaxesAndTaxCredits', 'DeferredIncomeTaxLiabilities', 'DeferredIncomeTaxLiabilitiesNet', 'DeferredRevenue', 'DeferredTaxAssetsGross', 'DeferredTaxAssetsLiabilitiesNet', 'DeferredTaxAssetsNet', 'DeferredTaxLiabilities', 'DefinedContributionPlanCostRecognized', 'Depreciation', 'DepreciationAmortizationAndAccretionNet', 'DepreciationAmortizationAndOther', 'DepreciationAndAmortization', 'DepreciationDepletionAndAmortization', 'DerivativeCollateralObligationToReturnCash', 'DerivativeCollateralRightToReclaimCash', 'DerivativeFairValueOfDerivativeNet', 'DerivativeLiabilityCollateralRightToReclaimCashOffset', 'DerivativeNotionalAmount', 'Dividends', 'DividendsCash', 'DividendsPayableAmountPerShare', 'DividendsPayableCurrent', 'DistributedEarnings', 'EarningsPerShareBasic', 'EarningsPerShareDiluted', 'EffectOfExchangeRateOnCashCashEquivalentsRestrictedCashAndRestrictedCashEquivalents', 'EffectOfExchangeRateOnCashCashEquivalentsRestrictedCashAndRestrictedCashEquivalentsIncludingDisposalGroupAndDiscontinuedOperations', 'EmployeeRelatedLiabilitiesCurrent', 'EmployeeRelatedLiabilitiesCurrentAndNoncurrent', 'EmployeeServiceShareBasedCompensationTaxBenefitFromCompensationExpense', 'FinanceLeaseInterestExpense', 'FinanceLeaseInterestPaymentOnLiability', 'FinanceLeaseLiability', 'FinanceLeaseLiabilityCurrent', 'FinanceLeaseLiabilityNoncurrent', 'FinanceLeaseLiabilityPaymentsDue', 'FinanceLeaseLiabilityPaymentsDueAfterYearFive', 'FinanceLeaseLiabilityPaymentsDueNextTwelveMonths', 'FinanceLeaseLiabilityPaymentsDueYearFive', 'FinanceLeaseLiabilityPaymentsDueYearFour', 'FinanceLeaseLiabilityPaymentsDueYearThree', 'FinanceLeaseLiabilityPaymentsDueYearTwo', 'FinanceLeaseLiabilityPaymentsRemainderOfFiscalYear', 'FinanceLeaseLiabilityUndiscountedExcessAmount', 'FinanceLeasePrincipalPayments', 'FinanceLeaseRightOfUseAsset', 'FinancingReceivableAllowanceForCreditLosses', 'FiniteLivedIntangibleAssetsNet', 'FixturesAndEquipmentGross', 'GainLossOnInvestments', 'GainLossOnInvestmentsAndDerivativeInstruments', 'GainLossOnSaleOfBusiness', 'GainsLossesOnExtinguishmentOfDebt', 'GeneralAndAdministrativeExpense', 'Goodwill', 'GrossProfit', 'ImpairmentOfIntangibleAssetsExcludingGoodwill', 'ImpairmentOfIntangibleAssetsIndefinitelivedExcludingGoodwill', 'IncomeLossFromContinuingOperations', 'IncomeLossFromContinuingOperationsAttributableToNoncontrollingEntity', 'IncomeLossFromContinuingOperationsBeforeIncomeTaxesExtraordinaryItemsNoncontrollingInterest', 'IncomeLossFromContinuingOperationsPerBasicShare', 'IncomeLossFromContinuingOperationsPerDilutedShare', 'InterestAndDebtExpense', 'IncomeTaxExpenseBenefit', 'IncomeTaxesPaid', 'IncomeTaxesPaidNet', 'IncreaseDecreaseInAccountsAndOtherReceivables', 'IncreaseDecreaseInAccountsPayable', 'IncreaseDecreaseInAccountsReceivable', 'IncreaseDecreaseInAccruedLiabilities', 'IncreaseDecreaseInAccruedIncomeTaxesPayable', 'IncreaseDecreaseInAccruedTaxesPayable', 'IncreaseDecreaseInContractWithCustomerLiability', 'IncreaseDecreaseInDeferredIncomeTaxes', 'IncreaseDecreaseInInventories', 'IncreaseDecreaseInOtherCurrentAssets', 'IncreaseDecreaseInOtherCurrentLiabilities', 'IncreaseDecreaseInOtherNoncurrentAssets', 'IncreaseDecreaseInOtherNoncurrentLiabilities', 'IncreaseDecreaseInPensionPlanObligations', 'IncrementalCommonSharesAttributableToShareBasedPaymentArrangements', 'InterestExpenseDebt', 'InterestIncomeExpenseNet', 'InterestPaid', 'InterestPaidNet', 'InventoryNet', 'InvestmentIncomeInterest', 'Land', 'LeaseAndRentalExpense', 'LesseeOperatingLeaseLiabilityPaymentsDue', 'LesseeOperatingLeaseLiabilityPaymentsDueAfterYearFive', 'LesseeOperatingLeaseLiabilityPaymentsDueNextTwelveMonths', 'LesseeOperatingLeaseLiabilityPaymentsDueYearFive', 'LesseeOperatingLeaseLiabilityPaymentsDueYearFour', 'LesseeOperatingLeaseLiabilityPaymentsDueYearThree', 'LesseeOperatingLeaseLiabilityPaymentsDueYearTwo', 'LesseeOperatingLeaseLiabilityPaymentsRemainderOfFiscalYear', 'LettersOfCreditOutstandingAmount', 'Liabilities', 'LiabilitiesAndStockholdersEquity', 'LiabilitiesCurrent', 'LineOfCredit', 'LineOfCreditFacilityMaximumBorrowingCapacity', 'LongTermDebt', 'LongTermDebtCurrent', 'LongTermDebtMaturitiesRepaymentsOfPrincipalAfterYearFive', 'LongTermDebtMaturitiesRepaymentsOfPrincipalInNextTwelveMonths', 'LongTermDebtMaturitiesRepaymentsOfPrincipalInYearFive', 'LongTermDebtMaturitiesRepaymentsOfPrincipalInYearFour', 'LongTermDebtMaturitiesRepaymentsOfPrincipalInYearThree', 'LongTermDebtMaturitiesRepaymentsOfPrincipalInYearTwo', 'LongTermDebtMaturitiesRepaymentsOfPrincipalRemainderOfFiscalYear', 'LongTermDebtNoncurrent', 'LongTermInvestments', 'LossContingencyEstimateOfPossibleLoss', 'MachineryAndEquipmentGross', 'MarketableSecuritiesCurrent', 'MarketableSecuritiesNoncurrent', 'MinorityInterest', 'NetCashProvidedByUsedInFinancingActivities', 'NetCashProvidedByUsedInInvestingActivities', 'NetCashProvidedByUsedInOperatingActivities', 'NetIncomeLoss', 'NetIncomeLossAttributableToNoncontrollingInterest', 'NetIncomeLossAttributableToNonredeemableNoncontrollingInterest', 'NetIncomeLossAttributableToRedeemableNoncontrollingInterest', 'NonoperatingIncomeExpense', 'NoninterestIncome', 'NotesReceivableNet', 'OperatingExpenses', 'OperatingIncomeLoss', 'OperatingLeaseCost', 'OperatingLeaseLiability', 'OperatingLeaseLiabilityCurrent', 'OperatingLeaseLiabilityNoncurrent', 'OperatingLeaseRightOfUseAsset', 'OtherAccruedLiabilitiesCurrent', 'OtherAssetsCurrent', 'OtherAssetsNoncurrent', 'OtherComprehensiveIncomeLossAvailableForSaleSecuritiesAdjustmentNetOfTax', 'OtherComprehensiveIncomeLossCashFlowHedgeGainLossAfterReclassificationAndTax', 'OtherComprehensiveIncomeLossDerivativeInstrumentGainLossafterReclassificationandTax', 'OtherComprehensiveIncomeLossDerivativeInstrumentGainLossbeforeReclassificationafterTax', 'OtherComprehensiveIncomeLossForeignCurrencyTransactionAndTranslationAdjustmentNetOfTax', 'OtherComprehensiveIncomeLossNetOfTax', 'OtherComprehensiveIncomeLossNetOfTaxPortionAttributableToParent', 'OtherComprehensiveIncomeUnrealizedHoldingGainLossOnSecuritiesArisingDuringPeriodNetOfTax', 'OtherIncome', 'OtherLiabilitiesCurrent', 'OtherLiabilitiesNoncurrent', 'OtherLongTermDebt', 'OtherNoncashIncomeExpense', 'PaymentsForCapitalImprovements', 'PaymentsOfDividends', 'PaymentsOfDividendsMinorityInterest', 'PaymentsForProceedsFromBusinessesAndInterestInAffiliates', 'PaymentsForProceedsFromOtherInvestingActivities', 'PaymentsForRent', 'PaymentsForRepurchaseOfCommonStock', 'PaymentsOfDebtExtinguishmentCosts', 'PaymentsToAcquireInvestments', 'PaymentsToAcquirePropertyPlantAndEquipment', 'PreferredStockSharesOutstanding', 'PreferredStockValue', 'PrepaidExpenseAndOtherAssetsCurrent', 'PrepaidExpenseCurrent', 'ProceedsFromDebtMaturingInMoreThanThreeMonths', 'ProceedsFromDebtNetOfIssuanceCosts', 'ProceedsFromDivestitureOfBusinesses', 'ProceedsFromInvestments', 'ProceedsFromIssuanceOfCommonStock', 'ProceedsFromIssuanceOfDebt', 'ProceedsFromIssuanceOfLongTermDebt', 'ProceedsFromIssuanceOfUnsecuredDebt', 'ProceedsFromIssuanceOrSaleOfEquity', 'ProceedsFromMaturitiesPrepaymentsAndCallsOfAvailableForSaleSecurities', 'ProceedsFromPaymentsForOtherFinancingActivities', 'ProceedsFromPaymentsToMinorityShareholders', 'ProceedsFromRepaymentsOfShortTermDebt', 'ProceedsFromRepaymentsOfShortTermDebtMaturingInThreeMonthsOrLess', 'ProceedsFromSaleOfPropertyPlantAndEquipment', 'ProceedsFromStockOptionsExercised', 'ProfitLoss', 'PropertyPlantAndEquipmentGross', 'PropertyPlantAndEquipmentNet', 'ReceivablesNetCurrent', 'RedeemableNoncontrollingInterestEquityCarryingAmount', 'RepaymentsOfDebtMaturingInMoreThanThreeMonths', 'RepaymentsOfLongTermDebt', 'ResearchAndDevelopmentExpense', 'RestrictedCash', 'RestrictedCashAndCashEquivalents', 'RestrictedStockExpense', 'RestructuringCharges', 'RetainedEarningsAccumulatedDeficit', 'Revenues', 'RevenueFromContractWithCustomerExcludingAssessedTax', 'SecuredLongTermDebt', 'SellingAndMarketingExpense', 'SellingGeneralAndAdministrativeExpense', 'ShareBasedCompensation', 'ShortTermBorrowings', 'ShortTermInvestments', 'StockholdersEquity', 'StockholdersEquityIncludingPortionAttributableToNoncontrollingInterest', 'StockholdersEquityOther', 'StockIssuedDuringPeriodValueNewIssues', 'StockOptionPlanExpense', 'StockRedeemedOrCalledDuringPeriodValue', 'StockRepurchasedDuringPeriodValue', 'StockRepurchasedAndRetiredDuringPeriodValue', 'TaxesPayableCurrent', 'TradingSecuritiesDebt', 'TreasuryStockAcquiredAverageCostPerShare', 'TreasuryStockSharesAcquired', 'UnrealizedGainLossOnInvestments', 'UnrecognizedTaxBenefits', 'UnsecuredDebt', 'VariableLeaseCost', 'WeightedAverageNumberOfDilutedSharesOutstanding', 'WeightedAverageNumberOfSharesOutstandingBasic', 'WeightedAverageNumberDilutedSharesOutstandingAdjustment']"}),(0,n.jsx)(t.td,{children:"Fact or concept from the SEC taxonomy, in UpperCamelCase. Defaults to, 'Revenues'. AAPL, MSFT, GOOG, BRK-A currently report revenue as, 'RevenueFromContractWithCustomerExcludingAssessedTax'. In previous years, they have reported as 'Revenues'."}),(0,n.jsx)(t.td,{children:"Revenues"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['sec']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: sec."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"year"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The year to retrieve the data for. If not provided, the current year is used. When symbol(s) are provided, excluding the year will return all reported values for the concept."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_period"}),(0,n.jsx)(t.td,{children:"Literal['fy', 'q1', 'q2', 'q3', 'q4']"}),(0,n.jsx)(t.td,{children:"The fiscal period to retrieve the data for. If not provided, the most recent quarter is used. This parameter is ignored when a symbol is supplied."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"instantaneous"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether to retrieve instantaneous data. See the notes above for more information. Defaults to False. Some facts are only available as instantaneous data. The function will automatically attempt the inverse of this parameter if the initial fiscal quarter request fails. This parameter is ignored when a symbol is supplied."}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"use_cache"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether to use cache for the request. Defaults to True."}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[CompareCompanyFacts]\n        Serializable results.\n\n    provider : Optional[Literal['sec']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(o.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"value"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The reported value of the fact or concept."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"reported_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date when the report was filed."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period_beginning"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The start date of the reporting period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period_ending"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The end date of the reporting period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_year"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The fiscal year."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_period"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The fiscal period of the fiscal year."})]})]})]})}),(0,n.jsx)(o.A,{value:"sec",label:"sec",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"value"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The reported value of the fact or concept."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"reported_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date when the report was filed."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period_beginning"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The start date of the reporting period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period_ending"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The end date of the reporting period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_year"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The fiscal year."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_period"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The fiscal period of the fiscal year."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cik"}),(0,n.jsx)(t.td,{children:"Union[str, int]"}),(0,n.jsx)(t.td,{children:"Central Index Key (CIK) for the requested entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"location"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Geographic location of the reporting entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"form"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The SEC form associated with the fact or concept."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"frame"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The frame ID associated with the fact or concept, if applicable."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"accession"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"SEC filing accession number associated with the reported fact or concept."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fact"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The display name of the fact or concept."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"unit"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The unit of measurement for the fact or concept."})]})]})]})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function a(e){let{children:t,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(5260),s=r(74848);function i(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>C});var n=r(96540),s=r(34164),i=r(23104),a=r(56347),o=r(205),c=r(57485),d=r(31682),l=r(89466);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const s=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function x(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=h(e),[a,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[d,u]=p({queryString:r,groupId:s}),[x,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,l.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),b=(()=>{const e=d??x;return m({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{b&&c(b)}),[b]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=r(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var y=r(74848);function j(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),{pathname:u}=(0,a.zy)(),h=e=>{const t=e.currentTarget,r=d.indexOf(t),s=c[r].value;s!==n&&(l(t),o(s))},m=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:c.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>d.push(e),onKeyDown:m,onClick:h,...i,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,i?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&u.startsWith("/terminal")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=x(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,y.jsx)(j,{...e,...t}),(0,y.jsx)(v,{...e,...t})]})}function C(e){const t=(0,f.A)();return(0,y.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(96540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);