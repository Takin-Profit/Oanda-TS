export namespace Schemas {
	// <Schemas>
	export type CandlestickGranularity =
		| "S5"
		| "S10"
		| "S15"
		| "S30"
		| "M1"
		| "M2"
		| "M4"
		| "M5"
		| "M10"
		| "M15"
		| "M30"
		| "H1"
		| "H2"
		| "H3"
		| "H4"
		| "H6"
		| "H8"
		| "H12"
		| "D"
		| "W"
		| "M"
	export type WeeklyAlignment =
		| "Monday"
		| "Tuesday"
		| "Wednesday"
		| "Thursday"
		| "Friday"
		| "Saturday"
		| "Sunday"
	export type CandlestickData = Partial<{
		o: string
		h: string
		l: string
		c: string
	}>
	export type Candlestick = Partial<{
		time: string
		bid: CandlestickData
		ask: CandlestickData
		mid: CandlestickData
		volume: number
		complete: boolean
	}>
	export type OrderBookBucket = Partial<{
		price: string
		longCountPercent: string
		shortCountPercent: string
	}>
	export type OrderBook = Partial<{
		instrument: string
		time: string
		price: string
		bucketWidth: string
		buckets: Array<OrderBookBucket>
	}>
	export type PositionBookBucket = Partial<{
		price: string
		longCountPercent: string
		shortCountPercent: string
	}>
	export type PositionBook = Partial<{
		instrument: string
		time: string
		price: string
		bucketWidth: string
		buckets: Array<PositionBookBucket>
	}>
	export type PositionSide = Partial<{
		units: string
		averagePrice: string
		tradeIDs: Array<string>
		pl: string
		unrealizedPL: string
		resettablePL: string
		financing: string
		guaranteedExecutionFees: string
	}>
	export type Position = Partial<{
		instrument: string
		pl: string
		unrealizedPL: string
		marginUsed: string
		resettablePL: string
		financing: string
		commission: string
		guaranteedExecutionFees: string
		long: PositionSide
		short: PositionSide
	}>
	export type CalculatedPositionState = Partial<{
		instrument: string
		netUnrealizedPL: string
		longUnrealizedPL: string
		shortUnrealizedPL: string
		marginUsed: string
	}>
	export type TradeID = string
	export type TradeState = "OPEN" | "CLOSED" | "CLOSE_WHEN_TRADEABLE"
	export type TradeStateFilter =
		| "OPEN"
		| "CLOSED"
		| "CLOSE_WHEN_TRADEABLE"
		| "ALL"
	export type TradeSpecifier = string
	export type ClientExtensions = Partial<{
		id: string
		tag: string
		comment: string
	}>
	export type TakeProfitOrder = Partial<{
		id: string
		createTime: string
		state: "PENDING" | "FILLED" | "TRIGGERED" | "CANCELLED"
		clientExtensions: ClientExtensions
		type:
			| "MARKET"
			| "LIMIT"
			| "STOP"
			| "MARKET_IF_TOUCHED"
			| "TAKE_PROFIT"
			| "STOP_LOSS"
			| "TRAILING_STOP_LOSS"
			| "FIXED_PRICE"
		tradeID: string
		clientTradeID: string
		price: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		triggerCondition: "DEFAULT" | "INVERSE" | "BID" | "ASK" | "MID"
		fillingTransactionID: string
		filledTime: string
		tradeOpenedID: string
		tradeReducedID: string
		tradeClosedIDs: Array<string>
		cancellingTransactionID: string
		cancelledTime: string
		replacesOrderID: string
		replacedByOrderID: string
	}>
	export type StopLossOrder = Partial<{
		id: string
		createTime: string
		state: "PENDING" | "FILLED" | "TRIGGERED" | "CANCELLED"
		clientExtensions: ClientExtensions
		type:
			| "MARKET"
			| "LIMIT"
			| "STOP"
			| "MARKET_IF_TOUCHED"
			| "TAKE_PROFIT"
			| "STOP_LOSS"
			| "TRAILING_STOP_LOSS"
			| "FIXED_PRICE"
		guaranteedExecutionPremium: string
		tradeID: string
		clientTradeID: string
		price: string
		distance: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		triggerCondition: "DEFAULT" | "INVERSE" | "BID" | "ASK" | "MID"
		guaranteed: boolean
		fillingTransactionID: string
		filledTime: string
		tradeOpenedID: string
		tradeReducedID: string
		tradeClosedIDs: Array<string>
		cancellingTransactionID: string
		cancelledTime: string
		replacesOrderID: string
		replacedByOrderID: string
	}>
	export type TrailingStopLossOrder = Partial<{
		id: string
		createTime: string
		state: "PENDING" | "FILLED" | "TRIGGERED" | "CANCELLED"
		clientExtensions: ClientExtensions
		type:
			| "MARKET"
			| "LIMIT"
			| "STOP"
			| "MARKET_IF_TOUCHED"
			| "TAKE_PROFIT"
			| "STOP_LOSS"
			| "TRAILING_STOP_LOSS"
			| "FIXED_PRICE"
		tradeID: string
		clientTradeID: string
		distance: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		triggerCondition: "DEFAULT" | "INVERSE" | "BID" | "ASK" | "MID"
		trailingStopValue: string
		fillingTransactionID: string
		filledTime: string
		tradeOpenedID: string
		tradeReducedID: string
		tradeClosedIDs: Array<string>
		cancellingTransactionID: string
		cancelledTime: string
		replacesOrderID: string
		replacedByOrderID: string
	}>
	export type Trade = Partial<{
		id: string
		instrument: string
		price: string
		openTime: string
		state: "OPEN" | "CLOSED" | "CLOSE_WHEN_TRADEABLE"
		initialUnits: string
		initialMarginRequired: string
		currentUnits: string
		realizedPL: string
		unrealizedPL: string
		marginUsed: string
		averageClosePrice: string
		closingTransactionIDs: Array<string>
		financing: string
		closeTime: string
		clientExtensions: ClientExtensions
		takeProfitOrder: TakeProfitOrder
		stopLossOrder: StopLossOrder
		trailingStopLossOrder: TrailingStopLossOrder
	}>
	export type TradeSummary = Partial<{
		id: string
		instrument: string
		price: string
		openTime: string
		state: "OPEN" | "CLOSED" | "CLOSE_WHEN_TRADEABLE"
		initialUnits: string
		initialMarginRequired: string
		currentUnits: string
		realizedPL: string
		unrealizedPL: string
		marginUsed: string
		averageClosePrice: string
		closingTransactionIDs: Array<string>
		financing: string
		closeTime: string
		clientExtensions: ClientExtensions
		takeProfitOrderID: string
		stopLossOrderID: string
		trailingStopLossOrderID: string
	}>
	export type CalculatedTradeState = Partial<{
		id: string
		unrealizedPL: string
		marginUsed: string
	}>
	export type TradePL = "POSITIVE" | "NEGATIVE" | "ZERO"
	export type StatementYear = number
	export type MT4TransactionHeartbeat = Partial<{ type: string; time: string }>
	export type DecimalNumber = string
	export type AccountUnits = string
	export type Currency = string
	export type InstrumentName = string
	export type InstrumentType = "CURRENCY" | "CFD" | "METAL"
	export type InstrumentCommission = Partial<{
		commission: string
		unitsTraded: string
		minimumCommission: string
	}>
	export type Instrument = Partial<{
		name: string
		type: "CURRENCY" | "CFD" | "METAL"
		displayName: string
		pipLocation: number
		displayPrecision: number
		tradeUnitsPrecision: number
		minimumTradeSize: string
		maximumTrailingStopDistance: string
		minimumTrailingStopDistance: string
		maximumPositionSize: string
		maximumOrderUnits: string
		marginRate: string
		commission: InstrumentCommission
	}>
	export type DateTime = string
	export type AcceptDatetimeFormat = "UNIX" | "RFC3339"
	export type GuaranteedStopLossOrderLevelRestriction = Partial<{
		volume: string
		priceRange: string
	}>
	export type Direction = "LONG" | "SHORT"
	export type AccountID = string
	export type Order = Partial<{
		id: string
		createTime: string
		state: "PENDING" | "FILLED" | "TRIGGERED" | "CANCELLED"
		clientExtensions: ClientExtensions
	}>
	export type Account = Partial<{
		id: string
		alias: string
		currency: string
		balance: string
		createdByUserID: number
		createdTime: string
		guaranteedStopLossOrderMode: "DISABLED" | "ALLOWED" | "REQUIRED"
		pl: string
		resettablePL: string
		resettablePLTime: string
		financing: string
		commission: string
		guaranteedExecutionFees: string
		marginRate: string
		marginCallEnterTime: string
		marginCallExtensionCount: number
		lastMarginCallExtensionTime: string
		openTradeCount: number
		openPositionCount: number
		pendingOrderCount: number
		hedgingEnabled: boolean
		lastOrderFillTimestamp: string
		unrealizedPL: string
		NAV: string
		marginUsed: string
		marginAvailable: string
		positionValue: string
		marginCloseoutUnrealizedPL: string
		marginCloseoutNAV: string
		marginCloseoutMarginUsed: string
		marginCloseoutPercent: string
		marginCloseoutPositionValue: string
		withdrawalLimit: string
		marginCallMarginUsed: string
		marginCallPercent: string
		lastTransactionID: string
		trades: Array<TradeSummary>
		positions: Array<Position>
		orders: Array<Order>
	}>
	export type DynamicOrderState = Partial<{
		id: string
		trailingStopValue: string
		triggerDistance: string
		isTriggerDistanceExact: boolean
	}>
	export type AccountChangesState = Partial<{
		unrealizedPL: string
		NAV: string
		marginUsed: string
		marginAvailable: string
		positionValue: string
		marginCloseoutUnrealizedPL: string
		marginCloseoutNAV: string
		marginCloseoutMarginUsed: string
		marginCloseoutPercent: string
		marginCloseoutPositionValue: string
		withdrawalLimit: string
		marginCallMarginUsed: string
		marginCallPercent: string
		orders: Array<DynamicOrderState>
		trades: Array<CalculatedTradeState>
		positions: Array<CalculatedPositionState>
	}>
	export type AccountProperties = Partial<{
		id: string
		mt4AccountID: number
		tags: Array<string>
	}>
	export type GuaranteedStopLossOrderMode = "DISABLED" | "ALLOWED" | "REQUIRED"
	export type AccountSummary = Partial<{
		id: string
		alias: string
		currency: string
		balance: string
		createdByUserID: number
		createdTime: string
		guaranteedStopLossOrderMode: "DISABLED" | "ALLOWED" | "REQUIRED"
		pl: string
		resettablePL: string
		resettablePLTime: string
		financing: string
		commission: string
		guaranteedExecutionFees: string
		marginRate: string
		marginCallEnterTime: string
		marginCallExtensionCount: number
		lastMarginCallExtensionTime: string
		openTradeCount: number
		openPositionCount: number
		pendingOrderCount: number
		hedgingEnabled: boolean
		lastOrderFillTimestamp: string
		unrealizedPL: string
		NAV: string
		marginUsed: string
		marginAvailable: string
		positionValue: string
		marginCloseoutUnrealizedPL: string
		marginCloseoutNAV: string
		marginCloseoutMarginUsed: string
		marginCloseoutPercent: string
		marginCloseoutPositionValue: string
		withdrawalLimit: string
		marginCallMarginUsed: string
		marginCallPercent: string
		lastTransactionID: string
	}>
	export type CalculatedAccountState = Partial<{
		unrealizedPL: string
		NAV: string
		marginUsed: string
		marginAvailable: string
		positionValue: string
		marginCloseoutUnrealizedPL: string
		marginCloseoutNAV: string
		marginCloseoutMarginUsed: string
		marginCloseoutPercent: string
		marginCloseoutPositionValue: string
		withdrawalLimit: string
		marginCallMarginUsed: string
		marginCallPercent: string
	}>
	export type Transaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
	}>
	export type AccountChanges = Partial<{
		ordersCreated: Array<Order>
		ordersCancelled: Array<Order>
		ordersFilled: Array<Order>
		ordersTriggered: Array<Order>
		tradesOpened: Array<TradeSummary>
		tradesReduced: Array<TradeSummary>
		tradesClosed: Array<TradeSummary>
		positions: Array<Position>
		transactions: Array<Transaction>
	}>
	export type AccountFinancingMode =
		| "NO_FINANCING"
		| "SECOND_BY_SECOND"
		| "DAILY"
	export type PositionAggregationMode =
		| "ABSOLUTE_SUM"
		| "MAXIMAL_SIDE"
		| "NET_SUM"
	export type TransactionID = string
	export type TransactionType =
		| "CREATE"
		| "CLOSE"
		| "REOPEN"
		| "CLIENT_CONFIGURE"
		| "CLIENT_CONFIGURE_REJECT"
		| "TRANSFER_FUNDS"
		| "TRANSFER_FUNDS_REJECT"
		| "MARKET_ORDER"
		| "MARKET_ORDER_REJECT"
		| "FIXED_PRICE_ORDER"
		| "LIMIT_ORDER"
		| "LIMIT_ORDER_REJECT"
		| "STOP_ORDER"
		| "STOP_ORDER_REJECT"
		| "MARKET_IF_TOUCHED_ORDER"
		| "MARKET_IF_TOUCHED_ORDER_REJECT"
		| "TAKE_PROFIT_ORDER"
		| "TAKE_PROFIT_ORDER_REJECT"
		| "STOP_LOSS_ORDER"
		| "STOP_LOSS_ORDER_REJECT"
		| "TRAILING_STOP_LOSS_ORDER"
		| "TRAILING_STOP_LOSS_ORDER_REJECT"
		| "ORDER_FILL"
		| "ORDER_CANCEL"
		| "ORDER_CANCEL_REJECT"
		| "ORDER_CLIENT_EXTENSIONS_MODIFY"
		| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
		| "TRADE_CLIENT_EXTENSIONS_MODIFY"
		| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
		| "MARGIN_CALL_ENTER"
		| "MARGIN_CALL_EXTEND"
		| "MARGIN_CALL_EXIT"
		| "DELAYED_TRADE_CLOSURE"
		| "DAILY_FINANCING"
		| "RESET_RESETTABLE_PL"
	export type CreateTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		divisionID: number
		siteID: number
		accountUserID: number
		accountNumber: number
		homeCurrency: string
	}>
	export type CloseTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
	}>
	export type ReopenTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
	}>
	export type ClientConfigureTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		alias: string
		marginRate: string
	}>
	export type ClientConfigureRejectTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		alias: string
		marginRate: string
		rejectReason:
			| "INTERNAL_SERVER_ERROR"
			| "INSTRUMENT_PRICE_UNKNOWN"
			| "ACCOUNT_NOT_ACTIVE"
			| "ACCOUNT_LOCKED"
			| "ACCOUNT_ORDER_CREATION_LOCKED"
			| "ACCOUNT_CONFIGURATION_LOCKED"
			| "ACCOUNT_DEPOSIT_LOCKED"
			| "ACCOUNT_WITHDRAWAL_LOCKED"
			| "ACCOUNT_ORDER_CANCEL_LOCKED"
			| "INSTRUMENT_NOT_TRADEABLE"
			| "PENDING_ORDERS_ALLOWED_EXCEEDED"
			| "ORDER_ID_UNSPECIFIED"
			| "ORDER_DOESNT_EXIST"
			| "ORDER_IDENTIFIER_INCONSISTENCY"
			| "TRADE_ID_UNSPECIFIED"
			| "TRADE_DOESNT_EXIST"
			| "TRADE_IDENTIFIER_INCONSISTENCY"
			| "INSUFFICIENT_MARGIN"
			| "INSTRUMENT_MISSING"
			| "INSTRUMENT_UNKNOWN"
			| "UNITS_MISSING"
			| "UNITS_INVALID"
			| "UNITS_PRECISION_EXCEEDED"
			| "UNITS_LIMIT_EXCEEDED"
			| "UNITS_MIMIMUM_NOT_MET"
			| "PRICE_MISSING"
			| "PRICE_INVALID"
			| "PRICE_PRECISION_EXCEEDED"
			| "PRICE_DISTANCE_MISSING"
			| "PRICE_DISTANCE_INVALID"
			| "PRICE_DISTANCE_PRECISION_EXCEEDED"
			| "PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "PRICE_DISTANCE_MINIMUM_NOT_MET"
			| "TIME_IN_FORCE_MISSING"
			| "TIME_IN_FORCE_INVALID"
			| "TIME_IN_FORCE_GTD_TIMESTAMP_MISSING"
			| "TIME_IN_FORCE_GTD_TIMESTAMP_IN_PAST"
			| "PRICE_BOUND_INVALID"
			| "PRICE_BOUND_PRECISION_EXCEEDED"
			| "ORDERS_ON_FILL_DUPLICATE_CLIENT_ORDER_IDS"
			| "TRADE_ON_FILL_CLIENT_EXTENSIONS_NOT_SUPPORTED"
			| "CLIENT_ORDER_ID_INVALID"
			| "CLIENT_ORDER_ID_ALREADY_EXISTS"
			| "CLIENT_ORDER_TAG_INVALID"
			| "CLIENT_ORDER_COMMENT_INVALID"
			| "CLIENT_TRADE_ID_INVALID"
			| "CLIENT_TRADE_ID_ALREADY_EXISTS"
			| "CLIENT_TRADE_TAG_INVALID"
			| "CLIENT_TRADE_COMMENT_INVALID"
			| "ORDER_FILL_POSITION_ACTION_MISSING"
			| "ORDER_FILL_POSITION_ACTION_INVALID"
			| "TRIGGER_CONDITION_MISSING"
			| "TRIGGER_CONDITION_INVALID"
			| "ORDER_PARTIAL_FILL_OPTION_MISSING"
			| "ORDER_PARTIAL_FILL_OPTION_INVALID"
			| "INVALID_REISSUE_IMMEDIATE_PARTIAL_FILL"
			| "TAKE_PROFIT_ORDER_ALREADY_EXISTS"
			| "TAKE_PROFIT_ON_FILL_PRICE_MISSING"
			| "TAKE_PROFIT_ON_FILL_PRICE_INVALID"
			| "TAKE_PROFIT_ON_FILL_PRICE_PRECISION_EXCEEDED"
			| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_MISSING"
			| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_INVALID"
			| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "STOP_LOSS_ORDER_ALREADY_EXISTS"
			| "STOP_LOSS_ORDER_GUARANTEED_REQUIRED"
			| "STOP_LOSS_ORDER_GUARANTEED_PRICE_WITHIN_SPREAD"
			| "STOP_LOSS_ORDER_GUARANTEED_NOT_ALLOWED"
			| "STOP_LOSS_ORDER_GUARANTEED_HALTED_CREATE_VIOLATION"
			| "STOP_LOSS_ORDER_GUARANTEED_HALTED_TIGHTEN_VIOLATION"
			| "STOP_LOSS_ORDER_GUARANTEED_HEDGING_NOT_ALLOWED"
			| "STOP_LOSS_ORDER_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
			| "STOP_LOSS_ORDER_NOT_CANCELABLE"
			| "STOP_LOSS_ORDER_NOT_REPLACEABLE"
			| "STOP_LOSS_ORDER_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
			| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
			| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_MISSING"
			| "STOP_LOSS_ON_FILL_REQUIRED_FOR_PENDING_ORDER"
			| "STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED"
			| "STOP_LOSS_ON_FILL_PRICE_MISSING"
			| "STOP_LOSS_ON_FILL_PRICE_INVALID"
			| "STOP_LOSS_ON_FILL_PRICE_PRECISION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
			| "STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_DISTANCE_INVALID"
			| "STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "STOP_LOSS_ON_FILL_DISTANCE_PRECISION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
			| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_MISSING"
			| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
			| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
			| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "TRAILING_STOP_LOSS_ORDER_ALREADY_EXISTS"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_PRECISION_EXCEEDED"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MINIMUM_NOT_MET"
			| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "TRAILING_STOP_LOSS_ORDERS_NOT_SUPPORTED"
			| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "CLOSE_TRADE_TYPE_MISSING"
			| "CLOSE_TRADE_PARTIAL_UNITS_MISSING"
			| "CLOSE_TRADE_UNITS_EXCEED_TRADE_SIZE"
			| "CLOSEOUT_POSITION_DOESNT_EXIST"
			| "CLOSEOUT_POSITION_INCOMPLETE_SPECIFICATION"
			| "CLOSEOUT_POSITION_UNITS_EXCEED_POSITION_SIZE"
			| "CLOSEOUT_POSITION_REJECT"
			| "CLOSEOUT_POSITION_PARTIAL_UNITS_MISSING"
			| "MARKUP_GROUP_ID_INVALID"
			| "POSITION_AGGREGATION_MODE_INVALID"
			| "ADMIN_CONFIGURE_DATA_MISSING"
			| "MARGIN_RATE_INVALID"
			| "MARGIN_RATE_WOULD_TRIGGER_CLOSEOUT"
			| "ALIAS_INVALID"
			| "CLIENT_CONFIGURE_DATA_MISSING"
			| "MARGIN_RATE_WOULD_TRIGGER_MARGIN_CALL"
			| "AMOUNT_INVALID"
			| "INSUFFICIENT_FUNDS"
			| "AMOUNT_MISSING"
			| "FUNDING_REASON_MISSING"
			| "CLIENT_EXTENSIONS_DATA_MISSING"
			| "REPLACING_ORDER_INVALID"
			| "REPLACING_TRADE_ID_INVALID"
	}>
	export type FundingReason =
		| "CLIENT_FUNDING"
		| "ACCOUNT_TRANSFER"
		| "DIVISION_MIGRATION"
		| "SITE_MIGRATION"
		| "ADJUSTMENT"
	export type TransferFundsTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		amount: string
		fundingReason:
			| "CLIENT_FUNDING"
			| "ACCOUNT_TRANSFER"
			| "DIVISION_MIGRATION"
			| "SITE_MIGRATION"
			| "ADJUSTMENT"
		comment: string
		accountBalance: string
	}>
	export type TransferFundsRejectTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		amount: string
		fundingReason:
			| "CLIENT_FUNDING"
			| "ACCOUNT_TRANSFER"
			| "DIVISION_MIGRATION"
			| "SITE_MIGRATION"
			| "ADJUSTMENT"
		comment: string
		rejectReason:
			| "INTERNAL_SERVER_ERROR"
			| "INSTRUMENT_PRICE_UNKNOWN"
			| "ACCOUNT_NOT_ACTIVE"
			| "ACCOUNT_LOCKED"
			| "ACCOUNT_ORDER_CREATION_LOCKED"
			| "ACCOUNT_CONFIGURATION_LOCKED"
			| "ACCOUNT_DEPOSIT_LOCKED"
			| "ACCOUNT_WITHDRAWAL_LOCKED"
			| "ACCOUNT_ORDER_CANCEL_LOCKED"
			| "INSTRUMENT_NOT_TRADEABLE"
			| "PENDING_ORDERS_ALLOWED_EXCEEDED"
			| "ORDER_ID_UNSPECIFIED"
			| "ORDER_DOESNT_EXIST"
			| "ORDER_IDENTIFIER_INCONSISTENCY"
			| "TRADE_ID_UNSPECIFIED"
			| "TRADE_DOESNT_EXIST"
			| "TRADE_IDENTIFIER_INCONSISTENCY"
			| "INSUFFICIENT_MARGIN"
			| "INSTRUMENT_MISSING"
			| "INSTRUMENT_UNKNOWN"
			| "UNITS_MISSING"
			| "UNITS_INVALID"
			| "UNITS_PRECISION_EXCEEDED"
			| "UNITS_LIMIT_EXCEEDED"
			| "UNITS_MIMIMUM_NOT_MET"
			| "PRICE_MISSING"
			| "PRICE_INVALID"
			| "PRICE_PRECISION_EXCEEDED"
			| "PRICE_DISTANCE_MISSING"
			| "PRICE_DISTANCE_INVALID"
			| "PRICE_DISTANCE_PRECISION_EXCEEDED"
			| "PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "PRICE_DISTANCE_MINIMUM_NOT_MET"
			| "TIME_IN_FORCE_MISSING"
			| "TIME_IN_FORCE_INVALID"
			| "TIME_IN_FORCE_GTD_TIMESTAMP_MISSING"
			| "TIME_IN_FORCE_GTD_TIMESTAMP_IN_PAST"
			| "PRICE_BOUND_INVALID"
			| "PRICE_BOUND_PRECISION_EXCEEDED"
			| "ORDERS_ON_FILL_DUPLICATE_CLIENT_ORDER_IDS"
			| "TRADE_ON_FILL_CLIENT_EXTENSIONS_NOT_SUPPORTED"
			| "CLIENT_ORDER_ID_INVALID"
			| "CLIENT_ORDER_ID_ALREADY_EXISTS"
			| "CLIENT_ORDER_TAG_INVALID"
			| "CLIENT_ORDER_COMMENT_INVALID"
			| "CLIENT_TRADE_ID_INVALID"
			| "CLIENT_TRADE_ID_ALREADY_EXISTS"
			| "CLIENT_TRADE_TAG_INVALID"
			| "CLIENT_TRADE_COMMENT_INVALID"
			| "ORDER_FILL_POSITION_ACTION_MISSING"
			| "ORDER_FILL_POSITION_ACTION_INVALID"
			| "TRIGGER_CONDITION_MISSING"
			| "TRIGGER_CONDITION_INVALID"
			| "ORDER_PARTIAL_FILL_OPTION_MISSING"
			| "ORDER_PARTIAL_FILL_OPTION_INVALID"
			| "INVALID_REISSUE_IMMEDIATE_PARTIAL_FILL"
			| "TAKE_PROFIT_ORDER_ALREADY_EXISTS"
			| "TAKE_PROFIT_ON_FILL_PRICE_MISSING"
			| "TAKE_PROFIT_ON_FILL_PRICE_INVALID"
			| "TAKE_PROFIT_ON_FILL_PRICE_PRECISION_EXCEEDED"
			| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_MISSING"
			| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_INVALID"
			| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "STOP_LOSS_ORDER_ALREADY_EXISTS"
			| "STOP_LOSS_ORDER_GUARANTEED_REQUIRED"
			| "STOP_LOSS_ORDER_GUARANTEED_PRICE_WITHIN_SPREAD"
			| "STOP_LOSS_ORDER_GUARANTEED_NOT_ALLOWED"
			| "STOP_LOSS_ORDER_GUARANTEED_HALTED_CREATE_VIOLATION"
			| "STOP_LOSS_ORDER_GUARANTEED_HALTED_TIGHTEN_VIOLATION"
			| "STOP_LOSS_ORDER_GUARANTEED_HEDGING_NOT_ALLOWED"
			| "STOP_LOSS_ORDER_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
			| "STOP_LOSS_ORDER_NOT_CANCELABLE"
			| "STOP_LOSS_ORDER_NOT_REPLACEABLE"
			| "STOP_LOSS_ORDER_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
			| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
			| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_MISSING"
			| "STOP_LOSS_ON_FILL_REQUIRED_FOR_PENDING_ORDER"
			| "STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED"
			| "STOP_LOSS_ON_FILL_PRICE_MISSING"
			| "STOP_LOSS_ON_FILL_PRICE_INVALID"
			| "STOP_LOSS_ON_FILL_PRICE_PRECISION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
			| "STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_DISTANCE_INVALID"
			| "STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "STOP_LOSS_ON_FILL_DISTANCE_PRECISION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
			| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_MISSING"
			| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
			| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
			| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "TRAILING_STOP_LOSS_ORDER_ALREADY_EXISTS"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_PRECISION_EXCEEDED"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MINIMUM_NOT_MET"
			| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "TRAILING_STOP_LOSS_ORDERS_NOT_SUPPORTED"
			| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "CLOSE_TRADE_TYPE_MISSING"
			| "CLOSE_TRADE_PARTIAL_UNITS_MISSING"
			| "CLOSE_TRADE_UNITS_EXCEED_TRADE_SIZE"
			| "CLOSEOUT_POSITION_DOESNT_EXIST"
			| "CLOSEOUT_POSITION_INCOMPLETE_SPECIFICATION"
			| "CLOSEOUT_POSITION_UNITS_EXCEED_POSITION_SIZE"
			| "CLOSEOUT_POSITION_REJECT"
			| "CLOSEOUT_POSITION_PARTIAL_UNITS_MISSING"
			| "MARKUP_GROUP_ID_INVALID"
			| "POSITION_AGGREGATION_MODE_INVALID"
			| "ADMIN_CONFIGURE_DATA_MISSING"
			| "MARGIN_RATE_INVALID"
			| "MARGIN_RATE_WOULD_TRIGGER_CLOSEOUT"
			| "ALIAS_INVALID"
			| "CLIENT_CONFIGURE_DATA_MISSING"
			| "MARGIN_RATE_WOULD_TRIGGER_MARGIN_CALL"
			| "AMOUNT_INVALID"
			| "INSUFFICIENT_FUNDS"
			| "AMOUNT_MISSING"
			| "FUNDING_REASON_MISSING"
			| "CLIENT_EXTENSIONS_DATA_MISSING"
			| "REPLACING_ORDER_INVALID"
			| "REPLACING_TRADE_ID_INVALID"
	}>
	export type MarketOrderReason =
		| "CLIENT_ORDER"
		| "TRADE_CLOSE"
		| "POSITION_CLOSEOUT"
		| "MARGIN_CLOSEOUT"
		| "DELAYED_TRADE_CLOSE"
	export type FixedPriceOrderReason = "PLATFORM_ACCOUNT_MIGRATION"
	export type MarketOrderTradeClose = Partial<{
		tradeID: string
		clientTradeID: string
		units: string
	}>
	export type MarketOrderPositionCloseout = Partial<{
		instrument: string
		units: string
	}>
	export type MarketOrderMarginCloseout = Partial<{
		reason:
			| "MARGIN_CHECK_VIOLATION"
			| "REGULATORY_MARGIN_CALL_VIOLATION"
			| "REGULATORY_MARGIN_CHECK_VIOLATION"
	}>
	export type MarketOrderDelayedTradeClose = Partial<{
		tradeID: string
		clientTradeID: string
		sourceTransactionID: string
	}>
	export type TakeProfitDetails = Partial<{
		price: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		clientExtensions: ClientExtensions
	}>
	export type StopLossDetails = Partial<{
		price: string
		distance: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		clientExtensions: ClientExtensions
		guaranteed: boolean
	}>
	export type TrailingStopLossDetails = Partial<{
		distance: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		clientExtensions: ClientExtensions
	}>
	export type MarketOrderTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		instrument: string
		units: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		priceBound: string
		positionFill: "OPEN_ONLY" | "REDUCE_FIRST" | "REDUCE_ONLY" | "DEFAULT"
		tradeClose: MarketOrderTradeClose
		longPositionCloseout: MarketOrderPositionCloseout
		shortPositionCloseout: MarketOrderPositionCloseout
		marginCloseout: MarketOrderMarginCloseout
		delayedTradeClose: MarketOrderDelayedTradeClose
		reason:
			| "CLIENT_ORDER"
			| "TRADE_CLOSE"
			| "POSITION_CLOSEOUT"
			| "MARGIN_CLOSEOUT"
			| "DELAYED_TRADE_CLOSE"
		clientExtensions: ClientExtensions
		takeProfitOnFill: TakeProfitDetails
		stopLossOnFill: StopLossDetails
		trailingStopLossOnFill: TrailingStopLossDetails
		tradeClientExtensions: ClientExtensions
	}>
	export type MarketOrderRejectTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		instrument: string
		units: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		priceBound: string
		positionFill: "OPEN_ONLY" | "REDUCE_FIRST" | "REDUCE_ONLY" | "DEFAULT"
		tradeClose: MarketOrderTradeClose
		longPositionCloseout: MarketOrderPositionCloseout
		shortPositionCloseout: MarketOrderPositionCloseout
		marginCloseout: MarketOrderMarginCloseout
		delayedTradeClose: MarketOrderDelayedTradeClose
		reason:
			| "CLIENT_ORDER"
			| "TRADE_CLOSE"
			| "POSITION_CLOSEOUT"
			| "MARGIN_CLOSEOUT"
			| "DELAYED_TRADE_CLOSE"
		clientExtensions: ClientExtensions
		takeProfitOnFill: TakeProfitDetails
		stopLossOnFill: StopLossDetails
		trailingStopLossOnFill: TrailingStopLossDetails
		tradeClientExtensions: ClientExtensions
		rejectReason:
			| "INTERNAL_SERVER_ERROR"
			| "INSTRUMENT_PRICE_UNKNOWN"
			| "ACCOUNT_NOT_ACTIVE"
			| "ACCOUNT_LOCKED"
			| "ACCOUNT_ORDER_CREATION_LOCKED"
			| "ACCOUNT_CONFIGURATION_LOCKED"
			| "ACCOUNT_DEPOSIT_LOCKED"
			| "ACCOUNT_WITHDRAWAL_LOCKED"
			| "ACCOUNT_ORDER_CANCEL_LOCKED"
			| "INSTRUMENT_NOT_TRADEABLE"
			| "PENDING_ORDERS_ALLOWED_EXCEEDED"
			| "ORDER_ID_UNSPECIFIED"
			| "ORDER_DOESNT_EXIST"
			| "ORDER_IDENTIFIER_INCONSISTENCY"
			| "TRADE_ID_UNSPECIFIED"
			| "TRADE_DOESNT_EXIST"
			| "TRADE_IDENTIFIER_INCONSISTENCY"
			| "INSUFFICIENT_MARGIN"
			| "INSTRUMENT_MISSING"
			| "INSTRUMENT_UNKNOWN"
			| "UNITS_MISSING"
			| "UNITS_INVALID"
			| "UNITS_PRECISION_EXCEEDED"
			| "UNITS_LIMIT_EXCEEDED"
			| "UNITS_MIMIMUM_NOT_MET"
			| "PRICE_MISSING"
			| "PRICE_INVALID"
			| "PRICE_PRECISION_EXCEEDED"
			| "PRICE_DISTANCE_MISSING"
			| "PRICE_DISTANCE_INVALID"
			| "PRICE_DISTANCE_PRECISION_EXCEEDED"
			| "PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "PRICE_DISTANCE_MINIMUM_NOT_MET"
			| "TIME_IN_FORCE_MISSING"
			| "TIME_IN_FORCE_INVALID"
			| "TIME_IN_FORCE_GTD_TIMESTAMP_MISSING"
			| "TIME_IN_FORCE_GTD_TIMESTAMP_IN_PAST"
			| "PRICE_BOUND_INVALID"
			| "PRICE_BOUND_PRECISION_EXCEEDED"
			| "ORDERS_ON_FILL_DUPLICATE_CLIENT_ORDER_IDS"
			| "TRADE_ON_FILL_CLIENT_EXTENSIONS_NOT_SUPPORTED"
			| "CLIENT_ORDER_ID_INVALID"
			| "CLIENT_ORDER_ID_ALREADY_EXISTS"
			| "CLIENT_ORDER_TAG_INVALID"
			| "CLIENT_ORDER_COMMENT_INVALID"
			| "CLIENT_TRADE_ID_INVALID"
			| "CLIENT_TRADE_ID_ALREADY_EXISTS"
			| "CLIENT_TRADE_TAG_INVALID"
			| "CLIENT_TRADE_COMMENT_INVALID"
			| "ORDER_FILL_POSITION_ACTION_MISSING"
			| "ORDER_FILL_POSITION_ACTION_INVALID"
			| "TRIGGER_CONDITION_MISSING"
			| "TRIGGER_CONDITION_INVALID"
			| "ORDER_PARTIAL_FILL_OPTION_MISSING"
			| "ORDER_PARTIAL_FILL_OPTION_INVALID"
			| "INVALID_REISSUE_IMMEDIATE_PARTIAL_FILL"
			| "TAKE_PROFIT_ORDER_ALREADY_EXISTS"
			| "TAKE_PROFIT_ON_FILL_PRICE_MISSING"
			| "TAKE_PROFIT_ON_FILL_PRICE_INVALID"
			| "TAKE_PROFIT_ON_FILL_PRICE_PRECISION_EXCEEDED"
			| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_MISSING"
			| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_INVALID"
			| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "STOP_LOSS_ORDER_ALREADY_EXISTS"
			| "STOP_LOSS_ORDER_GUARANTEED_REQUIRED"
			| "STOP_LOSS_ORDER_GUARANTEED_PRICE_WITHIN_SPREAD"
			| "STOP_LOSS_ORDER_GUARANTEED_NOT_ALLOWED"
			| "STOP_LOSS_ORDER_GUARANTEED_HALTED_CREATE_VIOLATION"
			| "STOP_LOSS_ORDER_GUARANTEED_HALTED_TIGHTEN_VIOLATION"
			| "STOP_LOSS_ORDER_GUARANTEED_HEDGING_NOT_ALLOWED"
			| "STOP_LOSS_ORDER_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
			| "STOP_LOSS_ORDER_NOT_CANCELABLE"
			| "STOP_LOSS_ORDER_NOT_REPLACEABLE"
			| "STOP_LOSS_ORDER_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
			| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
			| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_MISSING"
			| "STOP_LOSS_ON_FILL_REQUIRED_FOR_PENDING_ORDER"
			| "STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED"
			| "STOP_LOSS_ON_FILL_PRICE_MISSING"
			| "STOP_LOSS_ON_FILL_PRICE_INVALID"
			| "STOP_LOSS_ON_FILL_PRICE_PRECISION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
			| "STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_DISTANCE_INVALID"
			| "STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "STOP_LOSS_ON_FILL_DISTANCE_PRECISION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
			| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_MISSING"
			| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
			| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
			| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "TRAILING_STOP_LOSS_ORDER_ALREADY_EXISTS"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_PRECISION_EXCEEDED"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MINIMUM_NOT_MET"
			| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "TRAILING_STOP_LOSS_ORDERS_NOT_SUPPORTED"
			| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "CLOSE_TRADE_TYPE_MISSING"
			| "CLOSE_TRADE_PARTIAL_UNITS_MISSING"
			| "CLOSE_TRADE_UNITS_EXCEED_TRADE_SIZE"
			| "CLOSEOUT_POSITION_DOESNT_EXIST"
			| "CLOSEOUT_POSITION_INCOMPLETE_SPECIFICATION"
			| "CLOSEOUT_POSITION_UNITS_EXCEED_POSITION_SIZE"
			| "CLOSEOUT_POSITION_REJECT"
			| "CLOSEOUT_POSITION_PARTIAL_UNITS_MISSING"
			| "MARKUP_GROUP_ID_INVALID"
			| "POSITION_AGGREGATION_MODE_INVALID"
			| "ADMIN_CONFIGURE_DATA_MISSING"
			| "MARGIN_RATE_INVALID"
			| "MARGIN_RATE_WOULD_TRIGGER_CLOSEOUT"
			| "ALIAS_INVALID"
			| "CLIENT_CONFIGURE_DATA_MISSING"
			| "MARGIN_RATE_WOULD_TRIGGER_MARGIN_CALL"
			| "AMOUNT_INVALID"
			| "INSUFFICIENT_FUNDS"
			| "AMOUNT_MISSING"
			| "FUNDING_REASON_MISSING"
			| "CLIENT_EXTENSIONS_DATA_MISSING"
			| "REPLACING_ORDER_INVALID"
			| "REPLACING_TRADE_ID_INVALID"
	}>
	export type FixedPriceOrderTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		instrument: string
		units: string
		price: string
		positionFill: "OPEN_ONLY" | "REDUCE_FIRST" | "REDUCE_ONLY" | "DEFAULT"
		tradeState: string
		reason: "PLATFORM_ACCOUNT_MIGRATION"
		clientExtensions: ClientExtensions
		takeProfitOnFill: TakeProfitDetails
		stopLossOnFill: StopLossDetails
		trailingStopLossOnFill: TrailingStopLossDetails
		tradeClientExtensions: ClientExtensions
	}>
	export type LimitOrderReason = "CLIENT_ORDER" | "REPLACEMENT"
	export type LimitOrderTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		instrument: string
		units: string
		price: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		positionFill: "OPEN_ONLY" | "REDUCE_FIRST" | "REDUCE_ONLY" | "DEFAULT"
		triggerCondition: "DEFAULT" | "INVERSE" | "BID" | "ASK" | "MID"
		reason: "CLIENT_ORDER" | "REPLACEMENT"
		clientExtensions: ClientExtensions
		takeProfitOnFill: TakeProfitDetails
		stopLossOnFill: StopLossDetails
		trailingStopLossOnFill: TrailingStopLossDetails
		tradeClientExtensions: ClientExtensions
		replacesOrderID: string
		cancellingTransactionID: string
	}>
	export type LimitOrderRejectTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		instrument: string
		units: string
		price: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		positionFill: "OPEN_ONLY" | "REDUCE_FIRST" | "REDUCE_ONLY" | "DEFAULT"
		triggerCondition: "DEFAULT" | "INVERSE" | "BID" | "ASK" | "MID"
		reason: "CLIENT_ORDER" | "REPLACEMENT"
		clientExtensions: ClientExtensions
		takeProfitOnFill: TakeProfitDetails
		stopLossOnFill: StopLossDetails
		trailingStopLossOnFill: TrailingStopLossDetails
		tradeClientExtensions: ClientExtensions
		intendedReplacesOrderID: string
		rejectReason:
			| "INTERNAL_SERVER_ERROR"
			| "INSTRUMENT_PRICE_UNKNOWN"
			| "ACCOUNT_NOT_ACTIVE"
			| "ACCOUNT_LOCKED"
			| "ACCOUNT_ORDER_CREATION_LOCKED"
			| "ACCOUNT_CONFIGURATION_LOCKED"
			| "ACCOUNT_DEPOSIT_LOCKED"
			| "ACCOUNT_WITHDRAWAL_LOCKED"
			| "ACCOUNT_ORDER_CANCEL_LOCKED"
			| "INSTRUMENT_NOT_TRADEABLE"
			| "PENDING_ORDERS_ALLOWED_EXCEEDED"
			| "ORDER_ID_UNSPECIFIED"
			| "ORDER_DOESNT_EXIST"
			| "ORDER_IDENTIFIER_INCONSISTENCY"
			| "TRADE_ID_UNSPECIFIED"
			| "TRADE_DOESNT_EXIST"
			| "TRADE_IDENTIFIER_INCONSISTENCY"
			| "INSUFFICIENT_MARGIN"
			| "INSTRUMENT_MISSING"
			| "INSTRUMENT_UNKNOWN"
			| "UNITS_MISSING"
			| "UNITS_INVALID"
			| "UNITS_PRECISION_EXCEEDED"
			| "UNITS_LIMIT_EXCEEDED"
			| "UNITS_MIMIMUM_NOT_MET"
			| "PRICE_MISSING"
			| "PRICE_INVALID"
			| "PRICE_PRECISION_EXCEEDED"
			| "PRICE_DISTANCE_MISSING"
			| "PRICE_DISTANCE_INVALID"
			| "PRICE_DISTANCE_PRECISION_EXCEEDED"
			| "PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "PRICE_DISTANCE_MINIMUM_NOT_MET"
			| "TIME_IN_FORCE_MISSING"
			| "TIME_IN_FORCE_INVALID"
			| "TIME_IN_FORCE_GTD_TIMESTAMP_MISSING"
			| "TIME_IN_FORCE_GTD_TIMESTAMP_IN_PAST"
			| "PRICE_BOUND_INVALID"
			| "PRICE_BOUND_PRECISION_EXCEEDED"
			| "ORDERS_ON_FILL_DUPLICATE_CLIENT_ORDER_IDS"
			| "TRADE_ON_FILL_CLIENT_EXTENSIONS_NOT_SUPPORTED"
			| "CLIENT_ORDER_ID_INVALID"
			| "CLIENT_ORDER_ID_ALREADY_EXISTS"
			| "CLIENT_ORDER_TAG_INVALID"
			| "CLIENT_ORDER_COMMENT_INVALID"
			| "CLIENT_TRADE_ID_INVALID"
			| "CLIENT_TRADE_ID_ALREADY_EXISTS"
			| "CLIENT_TRADE_TAG_INVALID"
			| "CLIENT_TRADE_COMMENT_INVALID"
			| "ORDER_FILL_POSITION_ACTION_MISSING"
			| "ORDER_FILL_POSITION_ACTION_INVALID"
			| "TRIGGER_CONDITION_MISSING"
			| "TRIGGER_CONDITION_INVALID"
			| "ORDER_PARTIAL_FILL_OPTION_MISSING"
			| "ORDER_PARTIAL_FILL_OPTION_INVALID"
			| "INVALID_REISSUE_IMMEDIATE_PARTIAL_FILL"
			| "TAKE_PROFIT_ORDER_ALREADY_EXISTS"
			| "TAKE_PROFIT_ON_FILL_PRICE_MISSING"
			| "TAKE_PROFIT_ON_FILL_PRICE_INVALID"
			| "TAKE_PROFIT_ON_FILL_PRICE_PRECISION_EXCEEDED"
			| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_MISSING"
			| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_INVALID"
			| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "STOP_LOSS_ORDER_ALREADY_EXISTS"
			| "STOP_LOSS_ORDER_GUARANTEED_REQUIRED"
			| "STOP_LOSS_ORDER_GUARANTEED_PRICE_WITHIN_SPREAD"
			| "STOP_LOSS_ORDER_GUARANTEED_NOT_ALLOWED"
			| "STOP_LOSS_ORDER_GUARANTEED_HALTED_CREATE_VIOLATION"
			| "STOP_LOSS_ORDER_GUARANTEED_HALTED_TIGHTEN_VIOLATION"
			| "STOP_LOSS_ORDER_GUARANTEED_HEDGING_NOT_ALLOWED"
			| "STOP_LOSS_ORDER_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
			| "STOP_LOSS_ORDER_NOT_CANCELABLE"
			| "STOP_LOSS_ORDER_NOT_REPLACEABLE"
			| "STOP_LOSS_ORDER_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
			| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
			| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_MISSING"
			| "STOP_LOSS_ON_FILL_REQUIRED_FOR_PENDING_ORDER"
			| "STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED"
			| "STOP_LOSS_ON_FILL_PRICE_MISSING"
			| "STOP_LOSS_ON_FILL_PRICE_INVALID"
			| "STOP_LOSS_ON_FILL_PRICE_PRECISION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
			| "STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_DISTANCE_INVALID"
			| "STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "STOP_LOSS_ON_FILL_DISTANCE_PRECISION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
			| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_MISSING"
			| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
			| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
			| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "TRAILING_STOP_LOSS_ORDER_ALREADY_EXISTS"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_PRECISION_EXCEEDED"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MINIMUM_NOT_MET"
			| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "TRAILING_STOP_LOSS_ORDERS_NOT_SUPPORTED"
			| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "CLOSE_TRADE_TYPE_MISSING"
			| "CLOSE_TRADE_PARTIAL_UNITS_MISSING"
			| "CLOSE_TRADE_UNITS_EXCEED_TRADE_SIZE"
			| "CLOSEOUT_POSITION_DOESNT_EXIST"
			| "CLOSEOUT_POSITION_INCOMPLETE_SPECIFICATION"
			| "CLOSEOUT_POSITION_UNITS_EXCEED_POSITION_SIZE"
			| "CLOSEOUT_POSITION_REJECT"
			| "CLOSEOUT_POSITION_PARTIAL_UNITS_MISSING"
			| "MARKUP_GROUP_ID_INVALID"
			| "POSITION_AGGREGATION_MODE_INVALID"
			| "ADMIN_CONFIGURE_DATA_MISSING"
			| "MARGIN_RATE_INVALID"
			| "MARGIN_RATE_WOULD_TRIGGER_CLOSEOUT"
			| "ALIAS_INVALID"
			| "CLIENT_CONFIGURE_DATA_MISSING"
			| "MARGIN_RATE_WOULD_TRIGGER_MARGIN_CALL"
			| "AMOUNT_INVALID"
			| "INSUFFICIENT_FUNDS"
			| "AMOUNT_MISSING"
			| "FUNDING_REASON_MISSING"
			| "CLIENT_EXTENSIONS_DATA_MISSING"
			| "REPLACING_ORDER_INVALID"
			| "REPLACING_TRADE_ID_INVALID"
	}>
	export type StopOrderReason = "CLIENT_ORDER" | "REPLACEMENT"
	export type StopOrderTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		instrument: string
		units: string
		price: string
		priceBound: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		positionFill: "OPEN_ONLY" | "REDUCE_FIRST" | "REDUCE_ONLY" | "DEFAULT"
		triggerCondition: "DEFAULT" | "INVERSE" | "BID" | "ASK" | "MID"
		reason: "CLIENT_ORDER" | "REPLACEMENT"
		clientExtensions: ClientExtensions
		takeProfitOnFill: TakeProfitDetails
		stopLossOnFill: StopLossDetails
		trailingStopLossOnFill: TrailingStopLossDetails
		tradeClientExtensions: ClientExtensions
		replacesOrderID: string
		cancellingTransactionID: string
	}>
	export type StopOrderRejectTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		instrument: string
		units: string
		price: string
		priceBound: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		positionFill: "OPEN_ONLY" | "REDUCE_FIRST" | "REDUCE_ONLY" | "DEFAULT"
		triggerCondition: "DEFAULT" | "INVERSE" | "BID" | "ASK" | "MID"
		reason: "CLIENT_ORDER" | "REPLACEMENT"
		clientExtensions: ClientExtensions
		takeProfitOnFill: TakeProfitDetails
		stopLossOnFill: StopLossDetails
		trailingStopLossOnFill: TrailingStopLossDetails
		tradeClientExtensions: ClientExtensions
		intendedReplacesOrderID: string
		rejectReason:
			| "INTERNAL_SERVER_ERROR"
			| "INSTRUMENT_PRICE_UNKNOWN"
			| "ACCOUNT_NOT_ACTIVE"
			| "ACCOUNT_LOCKED"
			| "ACCOUNT_ORDER_CREATION_LOCKED"
			| "ACCOUNT_CONFIGURATION_LOCKED"
			| "ACCOUNT_DEPOSIT_LOCKED"
			| "ACCOUNT_WITHDRAWAL_LOCKED"
			| "ACCOUNT_ORDER_CANCEL_LOCKED"
			| "INSTRUMENT_NOT_TRADEABLE"
			| "PENDING_ORDERS_ALLOWED_EXCEEDED"
			| "ORDER_ID_UNSPECIFIED"
			| "ORDER_DOESNT_EXIST"
			| "ORDER_IDENTIFIER_INCONSISTENCY"
			| "TRADE_ID_UNSPECIFIED"
			| "TRADE_DOESNT_EXIST"
			| "TRADE_IDENTIFIER_INCONSISTENCY"
			| "INSUFFICIENT_MARGIN"
			| "INSTRUMENT_MISSING"
			| "INSTRUMENT_UNKNOWN"
			| "UNITS_MISSING"
			| "UNITS_INVALID"
			| "UNITS_PRECISION_EXCEEDED"
			| "UNITS_LIMIT_EXCEEDED"
			| "UNITS_MIMIMUM_NOT_MET"
			| "PRICE_MISSING"
			| "PRICE_INVALID"
			| "PRICE_PRECISION_EXCEEDED"
			| "PRICE_DISTANCE_MISSING"
			| "PRICE_DISTANCE_INVALID"
			| "PRICE_DISTANCE_PRECISION_EXCEEDED"
			| "PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "PRICE_DISTANCE_MINIMUM_NOT_MET"
			| "TIME_IN_FORCE_MISSING"
			| "TIME_IN_FORCE_INVALID"
			| "TIME_IN_FORCE_GTD_TIMESTAMP_MISSING"
			| "TIME_IN_FORCE_GTD_TIMESTAMP_IN_PAST"
			| "PRICE_BOUND_INVALID"
			| "PRICE_BOUND_PRECISION_EXCEEDED"
			| "ORDERS_ON_FILL_DUPLICATE_CLIENT_ORDER_IDS"
			| "TRADE_ON_FILL_CLIENT_EXTENSIONS_NOT_SUPPORTED"
			| "CLIENT_ORDER_ID_INVALID"
			| "CLIENT_ORDER_ID_ALREADY_EXISTS"
			| "CLIENT_ORDER_TAG_INVALID"
			| "CLIENT_ORDER_COMMENT_INVALID"
			| "CLIENT_TRADE_ID_INVALID"
			| "CLIENT_TRADE_ID_ALREADY_EXISTS"
			| "CLIENT_TRADE_TAG_INVALID"
			| "CLIENT_TRADE_COMMENT_INVALID"
			| "ORDER_FILL_POSITION_ACTION_MISSING"
			| "ORDER_FILL_POSITION_ACTION_INVALID"
			| "TRIGGER_CONDITION_MISSING"
			| "TRIGGER_CONDITION_INVALID"
			| "ORDER_PARTIAL_FILL_OPTION_MISSING"
			| "ORDER_PARTIAL_FILL_OPTION_INVALID"
			| "INVALID_REISSUE_IMMEDIATE_PARTIAL_FILL"
			| "TAKE_PROFIT_ORDER_ALREADY_EXISTS"
			| "TAKE_PROFIT_ON_FILL_PRICE_MISSING"
			| "TAKE_PROFIT_ON_FILL_PRICE_INVALID"
			| "TAKE_PROFIT_ON_FILL_PRICE_PRECISION_EXCEEDED"
			| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_MISSING"
			| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_INVALID"
			| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "STOP_LOSS_ORDER_ALREADY_EXISTS"
			| "STOP_LOSS_ORDER_GUARANTEED_REQUIRED"
			| "STOP_LOSS_ORDER_GUARANTEED_PRICE_WITHIN_SPREAD"
			| "STOP_LOSS_ORDER_GUARANTEED_NOT_ALLOWED"
			| "STOP_LOSS_ORDER_GUARANTEED_HALTED_CREATE_VIOLATION"
			| "STOP_LOSS_ORDER_GUARANTEED_HALTED_TIGHTEN_VIOLATION"
			| "STOP_LOSS_ORDER_GUARANTEED_HEDGING_NOT_ALLOWED"
			| "STOP_LOSS_ORDER_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
			| "STOP_LOSS_ORDER_NOT_CANCELABLE"
			| "STOP_LOSS_ORDER_NOT_REPLACEABLE"
			| "STOP_LOSS_ORDER_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
			| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
			| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_MISSING"
			| "STOP_LOSS_ON_FILL_REQUIRED_FOR_PENDING_ORDER"
			| "STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED"
			| "STOP_LOSS_ON_FILL_PRICE_MISSING"
			| "STOP_LOSS_ON_FILL_PRICE_INVALID"
			| "STOP_LOSS_ON_FILL_PRICE_PRECISION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
			| "STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_DISTANCE_INVALID"
			| "STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "STOP_LOSS_ON_FILL_DISTANCE_PRECISION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
			| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_MISSING"
			| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
			| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
			| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "TRAILING_STOP_LOSS_ORDER_ALREADY_EXISTS"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_PRECISION_EXCEEDED"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MINIMUM_NOT_MET"
			| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "TRAILING_STOP_LOSS_ORDERS_NOT_SUPPORTED"
			| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "CLOSE_TRADE_TYPE_MISSING"
			| "CLOSE_TRADE_PARTIAL_UNITS_MISSING"
			| "CLOSE_TRADE_UNITS_EXCEED_TRADE_SIZE"
			| "CLOSEOUT_POSITION_DOESNT_EXIST"
			| "CLOSEOUT_POSITION_INCOMPLETE_SPECIFICATION"
			| "CLOSEOUT_POSITION_UNITS_EXCEED_POSITION_SIZE"
			| "CLOSEOUT_POSITION_REJECT"
			| "CLOSEOUT_POSITION_PARTIAL_UNITS_MISSING"
			| "MARKUP_GROUP_ID_INVALID"
			| "POSITION_AGGREGATION_MODE_INVALID"
			| "ADMIN_CONFIGURE_DATA_MISSING"
			| "MARGIN_RATE_INVALID"
			| "MARGIN_RATE_WOULD_TRIGGER_CLOSEOUT"
			| "ALIAS_INVALID"
			| "CLIENT_CONFIGURE_DATA_MISSING"
			| "MARGIN_RATE_WOULD_TRIGGER_MARGIN_CALL"
			| "AMOUNT_INVALID"
			| "INSUFFICIENT_FUNDS"
			| "AMOUNT_MISSING"
			| "FUNDING_REASON_MISSING"
			| "CLIENT_EXTENSIONS_DATA_MISSING"
			| "REPLACING_ORDER_INVALID"
			| "REPLACING_TRADE_ID_INVALID"
	}>
	export type MarketIfTouchedOrderReason = "CLIENT_ORDER" | "REPLACEMENT"
	export type MarketIfTouchedOrderTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		instrument: string
		units: string
		price: string
		priceBound: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		positionFill: "OPEN_ONLY" | "REDUCE_FIRST" | "REDUCE_ONLY" | "DEFAULT"
		triggerCondition: "DEFAULT" | "INVERSE" | "BID" | "ASK" | "MID"
		reason: "CLIENT_ORDER" | "REPLACEMENT"
		clientExtensions: ClientExtensions
		takeProfitOnFill: TakeProfitDetails
		stopLossOnFill: StopLossDetails
		trailingStopLossOnFill: TrailingStopLossDetails
		tradeClientExtensions: ClientExtensions
		replacesOrderID: string
		cancellingTransactionID: string
	}>
	export type MarketIfTouchedOrderRejectTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		instrument: string
		units: string
		price: string
		priceBound: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		positionFill: "OPEN_ONLY" | "REDUCE_FIRST" | "REDUCE_ONLY" | "DEFAULT"
		triggerCondition: "DEFAULT" | "INVERSE" | "BID" | "ASK" | "MID"
		reason: "CLIENT_ORDER" | "REPLACEMENT"
		clientExtensions: ClientExtensions
		takeProfitOnFill: TakeProfitDetails
		stopLossOnFill: StopLossDetails
		trailingStopLossOnFill: TrailingStopLossDetails
		tradeClientExtensions: ClientExtensions
		intendedReplacesOrderID: string
		rejectReason:
			| "INTERNAL_SERVER_ERROR"
			| "INSTRUMENT_PRICE_UNKNOWN"
			| "ACCOUNT_NOT_ACTIVE"
			| "ACCOUNT_LOCKED"
			| "ACCOUNT_ORDER_CREATION_LOCKED"
			| "ACCOUNT_CONFIGURATION_LOCKED"
			| "ACCOUNT_DEPOSIT_LOCKED"
			| "ACCOUNT_WITHDRAWAL_LOCKED"
			| "ACCOUNT_ORDER_CANCEL_LOCKED"
			| "INSTRUMENT_NOT_TRADEABLE"
			| "PENDING_ORDERS_ALLOWED_EXCEEDED"
			| "ORDER_ID_UNSPECIFIED"
			| "ORDER_DOESNT_EXIST"
			| "ORDER_IDENTIFIER_INCONSISTENCY"
			| "TRADE_ID_UNSPECIFIED"
			| "TRADE_DOESNT_EXIST"
			| "TRADE_IDENTIFIER_INCONSISTENCY"
			| "INSUFFICIENT_MARGIN"
			| "INSTRUMENT_MISSING"
			| "INSTRUMENT_UNKNOWN"
			| "UNITS_MISSING"
			| "UNITS_INVALID"
			| "UNITS_PRECISION_EXCEEDED"
			| "UNITS_LIMIT_EXCEEDED"
			| "UNITS_MIMIMUM_NOT_MET"
			| "PRICE_MISSING"
			| "PRICE_INVALID"
			| "PRICE_PRECISION_EXCEEDED"
			| "PRICE_DISTANCE_MISSING"
			| "PRICE_DISTANCE_INVALID"
			| "PRICE_DISTANCE_PRECISION_EXCEEDED"
			| "PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "PRICE_DISTANCE_MINIMUM_NOT_MET"
			| "TIME_IN_FORCE_MISSING"
			| "TIME_IN_FORCE_INVALID"
			| "TIME_IN_FORCE_GTD_TIMESTAMP_MISSING"
			| "TIME_IN_FORCE_GTD_TIMESTAMP_IN_PAST"
			| "PRICE_BOUND_INVALID"
			| "PRICE_BOUND_PRECISION_EXCEEDED"
			| "ORDERS_ON_FILL_DUPLICATE_CLIENT_ORDER_IDS"
			| "TRADE_ON_FILL_CLIENT_EXTENSIONS_NOT_SUPPORTED"
			| "CLIENT_ORDER_ID_INVALID"
			| "CLIENT_ORDER_ID_ALREADY_EXISTS"
			| "CLIENT_ORDER_TAG_INVALID"
			| "CLIENT_ORDER_COMMENT_INVALID"
			| "CLIENT_TRADE_ID_INVALID"
			| "CLIENT_TRADE_ID_ALREADY_EXISTS"
			| "CLIENT_TRADE_TAG_INVALID"
			| "CLIENT_TRADE_COMMENT_INVALID"
			| "ORDER_FILL_POSITION_ACTION_MISSING"
			| "ORDER_FILL_POSITION_ACTION_INVALID"
			| "TRIGGER_CONDITION_MISSING"
			| "TRIGGER_CONDITION_INVALID"
			| "ORDER_PARTIAL_FILL_OPTION_MISSING"
			| "ORDER_PARTIAL_FILL_OPTION_INVALID"
			| "INVALID_REISSUE_IMMEDIATE_PARTIAL_FILL"
			| "TAKE_PROFIT_ORDER_ALREADY_EXISTS"
			| "TAKE_PROFIT_ON_FILL_PRICE_MISSING"
			| "TAKE_PROFIT_ON_FILL_PRICE_INVALID"
			| "TAKE_PROFIT_ON_FILL_PRICE_PRECISION_EXCEEDED"
			| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_MISSING"
			| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_INVALID"
			| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "STOP_LOSS_ORDER_ALREADY_EXISTS"
			| "STOP_LOSS_ORDER_GUARANTEED_REQUIRED"
			| "STOP_LOSS_ORDER_GUARANTEED_PRICE_WITHIN_SPREAD"
			| "STOP_LOSS_ORDER_GUARANTEED_NOT_ALLOWED"
			| "STOP_LOSS_ORDER_GUARANTEED_HALTED_CREATE_VIOLATION"
			| "STOP_LOSS_ORDER_GUARANTEED_HALTED_TIGHTEN_VIOLATION"
			| "STOP_LOSS_ORDER_GUARANTEED_HEDGING_NOT_ALLOWED"
			| "STOP_LOSS_ORDER_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
			| "STOP_LOSS_ORDER_NOT_CANCELABLE"
			| "STOP_LOSS_ORDER_NOT_REPLACEABLE"
			| "STOP_LOSS_ORDER_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
			| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
			| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_MISSING"
			| "STOP_LOSS_ON_FILL_REQUIRED_FOR_PENDING_ORDER"
			| "STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED"
			| "STOP_LOSS_ON_FILL_PRICE_MISSING"
			| "STOP_LOSS_ON_FILL_PRICE_INVALID"
			| "STOP_LOSS_ON_FILL_PRICE_PRECISION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
			| "STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_DISTANCE_INVALID"
			| "STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "STOP_LOSS_ON_FILL_DISTANCE_PRECISION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
			| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_MISSING"
			| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
			| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
			| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "TRAILING_STOP_LOSS_ORDER_ALREADY_EXISTS"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_PRECISION_EXCEEDED"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MINIMUM_NOT_MET"
			| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "TRAILING_STOP_LOSS_ORDERS_NOT_SUPPORTED"
			| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "CLOSE_TRADE_TYPE_MISSING"
			| "CLOSE_TRADE_PARTIAL_UNITS_MISSING"
			| "CLOSE_TRADE_UNITS_EXCEED_TRADE_SIZE"
			| "CLOSEOUT_POSITION_DOESNT_EXIST"
			| "CLOSEOUT_POSITION_INCOMPLETE_SPECIFICATION"
			| "CLOSEOUT_POSITION_UNITS_EXCEED_POSITION_SIZE"
			| "CLOSEOUT_POSITION_REJECT"
			| "CLOSEOUT_POSITION_PARTIAL_UNITS_MISSING"
			| "MARKUP_GROUP_ID_INVALID"
			| "POSITION_AGGREGATION_MODE_INVALID"
			| "ADMIN_CONFIGURE_DATA_MISSING"
			| "MARGIN_RATE_INVALID"
			| "MARGIN_RATE_WOULD_TRIGGER_CLOSEOUT"
			| "ALIAS_INVALID"
			| "CLIENT_CONFIGURE_DATA_MISSING"
			| "MARGIN_RATE_WOULD_TRIGGER_MARGIN_CALL"
			| "AMOUNT_INVALID"
			| "INSUFFICIENT_FUNDS"
			| "AMOUNT_MISSING"
			| "FUNDING_REASON_MISSING"
			| "CLIENT_EXTENSIONS_DATA_MISSING"
			| "REPLACING_ORDER_INVALID"
			| "REPLACING_TRADE_ID_INVALID"
	}>
	export type TakeProfitOrderReason = "CLIENT_ORDER" | "REPLACEMENT" | "ON_FILL"
	export type TakeProfitOrderTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		tradeID: string
		clientTradeID: string
		price: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		triggerCondition: "DEFAULT" | "INVERSE" | "BID" | "ASK" | "MID"
		reason: "CLIENT_ORDER" | "REPLACEMENT" | "ON_FILL"
		clientExtensions: ClientExtensions
		orderFillTransactionID: string
		replacesOrderID: string
		cancellingTransactionID: string
	}>
	export type TakeProfitOrderRejectTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		tradeID: string
		clientTradeID: string
		price: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		triggerCondition: "DEFAULT" | "INVERSE" | "BID" | "ASK" | "MID"
		reason: "CLIENT_ORDER" | "REPLACEMENT" | "ON_FILL"
		clientExtensions: ClientExtensions
		orderFillTransactionID: string
		intendedReplacesOrderID: string
		rejectReason:
			| "INTERNAL_SERVER_ERROR"
			| "INSTRUMENT_PRICE_UNKNOWN"
			| "ACCOUNT_NOT_ACTIVE"
			| "ACCOUNT_LOCKED"
			| "ACCOUNT_ORDER_CREATION_LOCKED"
			| "ACCOUNT_CONFIGURATION_LOCKED"
			| "ACCOUNT_DEPOSIT_LOCKED"
			| "ACCOUNT_WITHDRAWAL_LOCKED"
			| "ACCOUNT_ORDER_CANCEL_LOCKED"
			| "INSTRUMENT_NOT_TRADEABLE"
			| "PENDING_ORDERS_ALLOWED_EXCEEDED"
			| "ORDER_ID_UNSPECIFIED"
			| "ORDER_DOESNT_EXIST"
			| "ORDER_IDENTIFIER_INCONSISTENCY"
			| "TRADE_ID_UNSPECIFIED"
			| "TRADE_DOESNT_EXIST"
			| "TRADE_IDENTIFIER_INCONSISTENCY"
			| "INSUFFICIENT_MARGIN"
			| "INSTRUMENT_MISSING"
			| "INSTRUMENT_UNKNOWN"
			| "UNITS_MISSING"
			| "UNITS_INVALID"
			| "UNITS_PRECISION_EXCEEDED"
			| "UNITS_LIMIT_EXCEEDED"
			| "UNITS_MIMIMUM_NOT_MET"
			| "PRICE_MISSING"
			| "PRICE_INVALID"
			| "PRICE_PRECISION_EXCEEDED"
			| "PRICE_DISTANCE_MISSING"
			| "PRICE_DISTANCE_INVALID"
			| "PRICE_DISTANCE_PRECISION_EXCEEDED"
			| "PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "PRICE_DISTANCE_MINIMUM_NOT_MET"
			| "TIME_IN_FORCE_MISSING"
			| "TIME_IN_FORCE_INVALID"
			| "TIME_IN_FORCE_GTD_TIMESTAMP_MISSING"
			| "TIME_IN_FORCE_GTD_TIMESTAMP_IN_PAST"
			| "PRICE_BOUND_INVALID"
			| "PRICE_BOUND_PRECISION_EXCEEDED"
			| "ORDERS_ON_FILL_DUPLICATE_CLIENT_ORDER_IDS"
			| "TRADE_ON_FILL_CLIENT_EXTENSIONS_NOT_SUPPORTED"
			| "CLIENT_ORDER_ID_INVALID"
			| "CLIENT_ORDER_ID_ALREADY_EXISTS"
			| "CLIENT_ORDER_TAG_INVALID"
			| "CLIENT_ORDER_COMMENT_INVALID"
			| "CLIENT_TRADE_ID_INVALID"
			| "CLIENT_TRADE_ID_ALREADY_EXISTS"
			| "CLIENT_TRADE_TAG_INVALID"
			| "CLIENT_TRADE_COMMENT_INVALID"
			| "ORDER_FILL_POSITION_ACTION_MISSING"
			| "ORDER_FILL_POSITION_ACTION_INVALID"
			| "TRIGGER_CONDITION_MISSING"
			| "TRIGGER_CONDITION_INVALID"
			| "ORDER_PARTIAL_FILL_OPTION_MISSING"
			| "ORDER_PARTIAL_FILL_OPTION_INVALID"
			| "INVALID_REISSUE_IMMEDIATE_PARTIAL_FILL"
			| "TAKE_PROFIT_ORDER_ALREADY_EXISTS"
			| "TAKE_PROFIT_ON_FILL_PRICE_MISSING"
			| "TAKE_PROFIT_ON_FILL_PRICE_INVALID"
			| "TAKE_PROFIT_ON_FILL_PRICE_PRECISION_EXCEEDED"
			| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_MISSING"
			| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_INVALID"
			| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "STOP_LOSS_ORDER_ALREADY_EXISTS"
			| "STOP_LOSS_ORDER_GUARANTEED_REQUIRED"
			| "STOP_LOSS_ORDER_GUARANTEED_PRICE_WITHIN_SPREAD"
			| "STOP_LOSS_ORDER_GUARANTEED_NOT_ALLOWED"
			| "STOP_LOSS_ORDER_GUARANTEED_HALTED_CREATE_VIOLATION"
			| "STOP_LOSS_ORDER_GUARANTEED_HALTED_TIGHTEN_VIOLATION"
			| "STOP_LOSS_ORDER_GUARANTEED_HEDGING_NOT_ALLOWED"
			| "STOP_LOSS_ORDER_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
			| "STOP_LOSS_ORDER_NOT_CANCELABLE"
			| "STOP_LOSS_ORDER_NOT_REPLACEABLE"
			| "STOP_LOSS_ORDER_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
			| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
			| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_MISSING"
			| "STOP_LOSS_ON_FILL_REQUIRED_FOR_PENDING_ORDER"
			| "STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED"
			| "STOP_LOSS_ON_FILL_PRICE_MISSING"
			| "STOP_LOSS_ON_FILL_PRICE_INVALID"
			| "STOP_LOSS_ON_FILL_PRICE_PRECISION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
			| "STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_DISTANCE_INVALID"
			| "STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "STOP_LOSS_ON_FILL_DISTANCE_PRECISION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
			| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_MISSING"
			| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
			| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
			| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "TRAILING_STOP_LOSS_ORDER_ALREADY_EXISTS"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_PRECISION_EXCEEDED"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MINIMUM_NOT_MET"
			| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "TRAILING_STOP_LOSS_ORDERS_NOT_SUPPORTED"
			| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "CLOSE_TRADE_TYPE_MISSING"
			| "CLOSE_TRADE_PARTIAL_UNITS_MISSING"
			| "CLOSE_TRADE_UNITS_EXCEED_TRADE_SIZE"
			| "CLOSEOUT_POSITION_DOESNT_EXIST"
			| "CLOSEOUT_POSITION_INCOMPLETE_SPECIFICATION"
			| "CLOSEOUT_POSITION_UNITS_EXCEED_POSITION_SIZE"
			| "CLOSEOUT_POSITION_REJECT"
			| "CLOSEOUT_POSITION_PARTIAL_UNITS_MISSING"
			| "MARKUP_GROUP_ID_INVALID"
			| "POSITION_AGGREGATION_MODE_INVALID"
			| "ADMIN_CONFIGURE_DATA_MISSING"
			| "MARGIN_RATE_INVALID"
			| "MARGIN_RATE_WOULD_TRIGGER_CLOSEOUT"
			| "ALIAS_INVALID"
			| "CLIENT_CONFIGURE_DATA_MISSING"
			| "MARGIN_RATE_WOULD_TRIGGER_MARGIN_CALL"
			| "AMOUNT_INVALID"
			| "INSUFFICIENT_FUNDS"
			| "AMOUNT_MISSING"
			| "FUNDING_REASON_MISSING"
			| "CLIENT_EXTENSIONS_DATA_MISSING"
			| "REPLACING_ORDER_INVALID"
			| "REPLACING_TRADE_ID_INVALID"
	}>
	export type StopLossOrderReason = "CLIENT_ORDER" | "REPLACEMENT" | "ON_FILL"
	export type StopLossOrderTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		tradeID: string
		clientTradeID: string
		price: string
		distance: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		triggerCondition: "DEFAULT" | "INVERSE" | "BID" | "ASK" | "MID"
		guaranteed: boolean
		guaranteedExecutionPremium: string
		reason: "CLIENT_ORDER" | "REPLACEMENT" | "ON_FILL"
		clientExtensions: ClientExtensions
		orderFillTransactionID: string
		replacesOrderID: string
		cancellingTransactionID: string
	}>
	export type StopLossOrderRejectTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		tradeID: string
		clientTradeID: string
		price: string
		distance: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		triggerCondition: "DEFAULT" | "INVERSE" | "BID" | "ASK" | "MID"
		guaranteed: boolean
		reason: "CLIENT_ORDER" | "REPLACEMENT" | "ON_FILL"
		clientExtensions: ClientExtensions
		orderFillTransactionID: string
		intendedReplacesOrderID: string
		rejectReason:
			| "INTERNAL_SERVER_ERROR"
			| "INSTRUMENT_PRICE_UNKNOWN"
			| "ACCOUNT_NOT_ACTIVE"
			| "ACCOUNT_LOCKED"
			| "ACCOUNT_ORDER_CREATION_LOCKED"
			| "ACCOUNT_CONFIGURATION_LOCKED"
			| "ACCOUNT_DEPOSIT_LOCKED"
			| "ACCOUNT_WITHDRAWAL_LOCKED"
			| "ACCOUNT_ORDER_CANCEL_LOCKED"
			| "INSTRUMENT_NOT_TRADEABLE"
			| "PENDING_ORDERS_ALLOWED_EXCEEDED"
			| "ORDER_ID_UNSPECIFIED"
			| "ORDER_DOESNT_EXIST"
			| "ORDER_IDENTIFIER_INCONSISTENCY"
			| "TRADE_ID_UNSPECIFIED"
			| "TRADE_DOESNT_EXIST"
			| "TRADE_IDENTIFIER_INCONSISTENCY"
			| "INSUFFICIENT_MARGIN"
			| "INSTRUMENT_MISSING"
			| "INSTRUMENT_UNKNOWN"
			| "UNITS_MISSING"
			| "UNITS_INVALID"
			| "UNITS_PRECISION_EXCEEDED"
			| "UNITS_LIMIT_EXCEEDED"
			| "UNITS_MIMIMUM_NOT_MET"
			| "PRICE_MISSING"
			| "PRICE_INVALID"
			| "PRICE_PRECISION_EXCEEDED"
			| "PRICE_DISTANCE_MISSING"
			| "PRICE_DISTANCE_INVALID"
			| "PRICE_DISTANCE_PRECISION_EXCEEDED"
			| "PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "PRICE_DISTANCE_MINIMUM_NOT_MET"
			| "TIME_IN_FORCE_MISSING"
			| "TIME_IN_FORCE_INVALID"
			| "TIME_IN_FORCE_GTD_TIMESTAMP_MISSING"
			| "TIME_IN_FORCE_GTD_TIMESTAMP_IN_PAST"
			| "PRICE_BOUND_INVALID"
			| "PRICE_BOUND_PRECISION_EXCEEDED"
			| "ORDERS_ON_FILL_DUPLICATE_CLIENT_ORDER_IDS"
			| "TRADE_ON_FILL_CLIENT_EXTENSIONS_NOT_SUPPORTED"
			| "CLIENT_ORDER_ID_INVALID"
			| "CLIENT_ORDER_ID_ALREADY_EXISTS"
			| "CLIENT_ORDER_TAG_INVALID"
			| "CLIENT_ORDER_COMMENT_INVALID"
			| "CLIENT_TRADE_ID_INVALID"
			| "CLIENT_TRADE_ID_ALREADY_EXISTS"
			| "CLIENT_TRADE_TAG_INVALID"
			| "CLIENT_TRADE_COMMENT_INVALID"
			| "ORDER_FILL_POSITION_ACTION_MISSING"
			| "ORDER_FILL_POSITION_ACTION_INVALID"
			| "TRIGGER_CONDITION_MISSING"
			| "TRIGGER_CONDITION_INVALID"
			| "ORDER_PARTIAL_FILL_OPTION_MISSING"
			| "ORDER_PARTIAL_FILL_OPTION_INVALID"
			| "INVALID_REISSUE_IMMEDIATE_PARTIAL_FILL"
			| "TAKE_PROFIT_ORDER_ALREADY_EXISTS"
			| "TAKE_PROFIT_ON_FILL_PRICE_MISSING"
			| "TAKE_PROFIT_ON_FILL_PRICE_INVALID"
			| "TAKE_PROFIT_ON_FILL_PRICE_PRECISION_EXCEEDED"
			| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_MISSING"
			| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_INVALID"
			| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "STOP_LOSS_ORDER_ALREADY_EXISTS"
			| "STOP_LOSS_ORDER_GUARANTEED_REQUIRED"
			| "STOP_LOSS_ORDER_GUARANTEED_PRICE_WITHIN_SPREAD"
			| "STOP_LOSS_ORDER_GUARANTEED_NOT_ALLOWED"
			| "STOP_LOSS_ORDER_GUARANTEED_HALTED_CREATE_VIOLATION"
			| "STOP_LOSS_ORDER_GUARANTEED_HALTED_TIGHTEN_VIOLATION"
			| "STOP_LOSS_ORDER_GUARANTEED_HEDGING_NOT_ALLOWED"
			| "STOP_LOSS_ORDER_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
			| "STOP_LOSS_ORDER_NOT_CANCELABLE"
			| "STOP_LOSS_ORDER_NOT_REPLACEABLE"
			| "STOP_LOSS_ORDER_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
			| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
			| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_MISSING"
			| "STOP_LOSS_ON_FILL_REQUIRED_FOR_PENDING_ORDER"
			| "STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED"
			| "STOP_LOSS_ON_FILL_PRICE_MISSING"
			| "STOP_LOSS_ON_FILL_PRICE_INVALID"
			| "STOP_LOSS_ON_FILL_PRICE_PRECISION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
			| "STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_DISTANCE_INVALID"
			| "STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "STOP_LOSS_ON_FILL_DISTANCE_PRECISION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
			| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_MISSING"
			| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
			| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
			| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "TRAILING_STOP_LOSS_ORDER_ALREADY_EXISTS"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_PRECISION_EXCEEDED"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MINIMUM_NOT_MET"
			| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "TRAILING_STOP_LOSS_ORDERS_NOT_SUPPORTED"
			| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "CLOSE_TRADE_TYPE_MISSING"
			| "CLOSE_TRADE_PARTIAL_UNITS_MISSING"
			| "CLOSE_TRADE_UNITS_EXCEED_TRADE_SIZE"
			| "CLOSEOUT_POSITION_DOESNT_EXIST"
			| "CLOSEOUT_POSITION_INCOMPLETE_SPECIFICATION"
			| "CLOSEOUT_POSITION_UNITS_EXCEED_POSITION_SIZE"
			| "CLOSEOUT_POSITION_REJECT"
			| "CLOSEOUT_POSITION_PARTIAL_UNITS_MISSING"
			| "MARKUP_GROUP_ID_INVALID"
			| "POSITION_AGGREGATION_MODE_INVALID"
			| "ADMIN_CONFIGURE_DATA_MISSING"
			| "MARGIN_RATE_INVALID"
			| "MARGIN_RATE_WOULD_TRIGGER_CLOSEOUT"
			| "ALIAS_INVALID"
			| "CLIENT_CONFIGURE_DATA_MISSING"
			| "MARGIN_RATE_WOULD_TRIGGER_MARGIN_CALL"
			| "AMOUNT_INVALID"
			| "INSUFFICIENT_FUNDS"
			| "AMOUNT_MISSING"
			| "FUNDING_REASON_MISSING"
			| "CLIENT_EXTENSIONS_DATA_MISSING"
			| "REPLACING_ORDER_INVALID"
			| "REPLACING_TRADE_ID_INVALID"
	}>
	export type TrailingStopLossOrderReason =
		| "CLIENT_ORDER"
		| "REPLACEMENT"
		| "ON_FILL"
	export type TrailingStopLossOrderTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		tradeID: string
		clientTradeID: string
		distance: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		triggerCondition: "DEFAULT" | "INVERSE" | "BID" | "ASK" | "MID"
		reason: "CLIENT_ORDER" | "REPLACEMENT" | "ON_FILL"
		clientExtensions: ClientExtensions
		orderFillTransactionID: string
		replacesOrderID: string
		cancellingTransactionID: string
	}>
	export type TrailingStopLossOrderRejectTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		tradeID: string
		clientTradeID: string
		distance: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		triggerCondition: "DEFAULT" | "INVERSE" | "BID" | "ASK" | "MID"
		reason: "CLIENT_ORDER" | "REPLACEMENT" | "ON_FILL"
		clientExtensions: ClientExtensions
		orderFillTransactionID: string
		intendedReplacesOrderID: string
		rejectReason:
			| "INTERNAL_SERVER_ERROR"
			| "INSTRUMENT_PRICE_UNKNOWN"
			| "ACCOUNT_NOT_ACTIVE"
			| "ACCOUNT_LOCKED"
			| "ACCOUNT_ORDER_CREATION_LOCKED"
			| "ACCOUNT_CONFIGURATION_LOCKED"
			| "ACCOUNT_DEPOSIT_LOCKED"
			| "ACCOUNT_WITHDRAWAL_LOCKED"
			| "ACCOUNT_ORDER_CANCEL_LOCKED"
			| "INSTRUMENT_NOT_TRADEABLE"
			| "PENDING_ORDERS_ALLOWED_EXCEEDED"
			| "ORDER_ID_UNSPECIFIED"
			| "ORDER_DOESNT_EXIST"
			| "ORDER_IDENTIFIER_INCONSISTENCY"
			| "TRADE_ID_UNSPECIFIED"
			| "TRADE_DOESNT_EXIST"
			| "TRADE_IDENTIFIER_INCONSISTENCY"
			| "INSUFFICIENT_MARGIN"
			| "INSTRUMENT_MISSING"
			| "INSTRUMENT_UNKNOWN"
			| "UNITS_MISSING"
			| "UNITS_INVALID"
			| "UNITS_PRECISION_EXCEEDED"
			| "UNITS_LIMIT_EXCEEDED"
			| "UNITS_MIMIMUM_NOT_MET"
			| "PRICE_MISSING"
			| "PRICE_INVALID"
			| "PRICE_PRECISION_EXCEEDED"
			| "PRICE_DISTANCE_MISSING"
			| "PRICE_DISTANCE_INVALID"
			| "PRICE_DISTANCE_PRECISION_EXCEEDED"
			| "PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "PRICE_DISTANCE_MINIMUM_NOT_MET"
			| "TIME_IN_FORCE_MISSING"
			| "TIME_IN_FORCE_INVALID"
			| "TIME_IN_FORCE_GTD_TIMESTAMP_MISSING"
			| "TIME_IN_FORCE_GTD_TIMESTAMP_IN_PAST"
			| "PRICE_BOUND_INVALID"
			| "PRICE_BOUND_PRECISION_EXCEEDED"
			| "ORDERS_ON_FILL_DUPLICATE_CLIENT_ORDER_IDS"
			| "TRADE_ON_FILL_CLIENT_EXTENSIONS_NOT_SUPPORTED"
			| "CLIENT_ORDER_ID_INVALID"
			| "CLIENT_ORDER_ID_ALREADY_EXISTS"
			| "CLIENT_ORDER_TAG_INVALID"
			| "CLIENT_ORDER_COMMENT_INVALID"
			| "CLIENT_TRADE_ID_INVALID"
			| "CLIENT_TRADE_ID_ALREADY_EXISTS"
			| "CLIENT_TRADE_TAG_INVALID"
			| "CLIENT_TRADE_COMMENT_INVALID"
			| "ORDER_FILL_POSITION_ACTION_MISSING"
			| "ORDER_FILL_POSITION_ACTION_INVALID"
			| "TRIGGER_CONDITION_MISSING"
			| "TRIGGER_CONDITION_INVALID"
			| "ORDER_PARTIAL_FILL_OPTION_MISSING"
			| "ORDER_PARTIAL_FILL_OPTION_INVALID"
			| "INVALID_REISSUE_IMMEDIATE_PARTIAL_FILL"
			| "TAKE_PROFIT_ORDER_ALREADY_EXISTS"
			| "TAKE_PROFIT_ON_FILL_PRICE_MISSING"
			| "TAKE_PROFIT_ON_FILL_PRICE_INVALID"
			| "TAKE_PROFIT_ON_FILL_PRICE_PRECISION_EXCEEDED"
			| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_MISSING"
			| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_INVALID"
			| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "STOP_LOSS_ORDER_ALREADY_EXISTS"
			| "STOP_LOSS_ORDER_GUARANTEED_REQUIRED"
			| "STOP_LOSS_ORDER_GUARANTEED_PRICE_WITHIN_SPREAD"
			| "STOP_LOSS_ORDER_GUARANTEED_NOT_ALLOWED"
			| "STOP_LOSS_ORDER_GUARANTEED_HALTED_CREATE_VIOLATION"
			| "STOP_LOSS_ORDER_GUARANTEED_HALTED_TIGHTEN_VIOLATION"
			| "STOP_LOSS_ORDER_GUARANTEED_HEDGING_NOT_ALLOWED"
			| "STOP_LOSS_ORDER_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
			| "STOP_LOSS_ORDER_NOT_CANCELABLE"
			| "STOP_LOSS_ORDER_NOT_REPLACEABLE"
			| "STOP_LOSS_ORDER_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
			| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
			| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_MISSING"
			| "STOP_LOSS_ON_FILL_REQUIRED_FOR_PENDING_ORDER"
			| "STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED"
			| "STOP_LOSS_ON_FILL_PRICE_MISSING"
			| "STOP_LOSS_ON_FILL_PRICE_INVALID"
			| "STOP_LOSS_ON_FILL_PRICE_PRECISION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
			| "STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_DISTANCE_INVALID"
			| "STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "STOP_LOSS_ON_FILL_DISTANCE_PRECISION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
			| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_MISSING"
			| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
			| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
			| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "TRAILING_STOP_LOSS_ORDER_ALREADY_EXISTS"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_PRECISION_EXCEEDED"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MINIMUM_NOT_MET"
			| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "TRAILING_STOP_LOSS_ORDERS_NOT_SUPPORTED"
			| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "CLOSE_TRADE_TYPE_MISSING"
			| "CLOSE_TRADE_PARTIAL_UNITS_MISSING"
			| "CLOSE_TRADE_UNITS_EXCEED_TRADE_SIZE"
			| "CLOSEOUT_POSITION_DOESNT_EXIST"
			| "CLOSEOUT_POSITION_INCOMPLETE_SPECIFICATION"
			| "CLOSEOUT_POSITION_UNITS_EXCEED_POSITION_SIZE"
			| "CLOSEOUT_POSITION_REJECT"
			| "CLOSEOUT_POSITION_PARTIAL_UNITS_MISSING"
			| "MARKUP_GROUP_ID_INVALID"
			| "POSITION_AGGREGATION_MODE_INVALID"
			| "ADMIN_CONFIGURE_DATA_MISSING"
			| "MARGIN_RATE_INVALID"
			| "MARGIN_RATE_WOULD_TRIGGER_CLOSEOUT"
			| "ALIAS_INVALID"
			| "CLIENT_CONFIGURE_DATA_MISSING"
			| "MARGIN_RATE_WOULD_TRIGGER_MARGIN_CALL"
			| "AMOUNT_INVALID"
			| "INSUFFICIENT_FUNDS"
			| "AMOUNT_MISSING"
			| "FUNDING_REASON_MISSING"
			| "CLIENT_EXTENSIONS_DATA_MISSING"
			| "REPLACING_ORDER_INVALID"
			| "REPLACING_TRADE_ID_INVALID"
	}>
	export type OrderFillReason =
		| "LIMIT_ORDER"
		| "STOP_ORDER"
		| "MARKET_IF_TOUCHED_ORDER"
		| "TAKE_PROFIT_ORDER"
		| "STOP_LOSS_ORDER"
		| "TRAILING_STOP_LOSS_ORDER"
		| "MARKET_ORDER"
		| "MARKET_ORDER_TRADE_CLOSE"
		| "MARKET_ORDER_POSITION_CLOSEOUT"
		| "MARKET_ORDER_MARGIN_CLOSEOUT"
		| "MARKET_ORDER_DELAYED_TRADE_CLOSE"
	export type PriceBucket = Partial<{ price: string; liquidity: number }>
	export type QuoteHomeConversionFactors = Partial<{
		positiveUnits: string
		negativeUnits: string
	}>
	export type UnitsAvailableDetails = Partial<{ long: string; short: string }>
	export type UnitsAvailable = Partial<{
		default: UnitsAvailableDetails
		reduceFirst: UnitsAvailableDetails
		reduceOnly: UnitsAvailableDetails
		openOnly: UnitsAvailableDetails
	}>
	export type ClientPrice = Partial<{
		type: string
		instrument: string
		time: string
		status: "tradeable" | "non-tradeable" | "invalid"
		tradeable: boolean
		bids: Array<PriceBucket>
		asks: Array<PriceBucket>
		closeoutBid: string
		closeoutAsk: string
		quoteHomeConversionFactors: QuoteHomeConversionFactors
		unitsAvailable: UnitsAvailable
	}>
	export type TradeOpen = Partial<{
		tradeID: string
		units: string
		price: string
		guaranteedExecutionFee: string
		clientExtensions: ClientExtensions
		halfSpreadCost: string
		initialMarginRequired: string
	}>
	export type TradeReduce = Partial<{
		tradeID: string
		units: string
		price: string
		realizedPL: string
		financing: string
		guaranteedExecutionFee: string
		halfSpreadCost: string
	}>
	export type OrderFillTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		orderID: string
		clientOrderID: string
		instrument: string
		units: string
		gainQuoteHomeConversionFactor: string
		lossQuoteHomeConversionFactor: string
		price: string
		fullVWAP: string
		fullPrice: ClientPrice
		reason:
			| "LIMIT_ORDER"
			| "STOP_ORDER"
			| "MARKET_IF_TOUCHED_ORDER"
			| "TAKE_PROFIT_ORDER"
			| "STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER"
			| "MARKET_ORDER"
			| "MARKET_ORDER_TRADE_CLOSE"
			| "MARKET_ORDER_POSITION_CLOSEOUT"
			| "MARKET_ORDER_MARGIN_CLOSEOUT"
			| "MARKET_ORDER_DELAYED_TRADE_CLOSE"
		pl: string
		financing: string
		commission: string
		guaranteedExecutionFee: string
		accountBalance: string
		tradeOpened: TradeOpen
		tradesClosed: Array<TradeReduce>
		tradeReduced: TradeReduce
		halfSpreadCost: string
	}>
	export type OrderCancelReason =
		| "INTERNAL_SERVER_ERROR"
		| "ACCOUNT_LOCKED"
		| "ACCOUNT_NEW_POSITIONS_LOCKED"
		| "ACCOUNT_ORDER_CREATION_LOCKED"
		| "ACCOUNT_ORDER_FILL_LOCKED"
		| "CLIENT_REQUEST"
		| "MIGRATION"
		| "MARKET_HALTED"
		| "LINKED_TRADE_CLOSED"
		| "TIME_IN_FORCE_EXPIRED"
		| "INSUFFICIENT_MARGIN"
		| "FIFO_VIOLATION"
		| "BOUNDS_VIOLATION"
		| "CLIENT_REQUEST_REPLACED"
		| "INSUFFICIENT_LIQUIDITY"
		| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST"
		| "TAKE_PROFIT_ON_FILL_LOSS"
		| "LOSING_TAKE_PROFIT"
		| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
		| "STOP_LOSS_ON_FILL_LOSS"
		| "STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
		| "STOP_LOSS_ON_FILL_REQUIRED"
		| "STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED"
		| "STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED"
		| "STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
		| "STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
		| "STOP_LOSS_ON_FILL_GUARANTEED_HEDGING_NOT_ALLOWED"
		| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
		| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
		| "TAKE_PROFIT_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
		| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
		| "CLIENT_TRADE_ID_ALREADY_EXISTS"
		| "POSITION_CLOSEOUT_FAILED"
		| "OPEN_TRADES_ALLOWED_EXCEEDED"
		| "PENDING_ORDERS_ALLOWED_EXCEEDED"
		| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS"
		| "STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS"
		| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS"
		| "POSITION_SIZE_EXCEEDED"
		| "HEDGING_GSLO_VIOLATION"
		| "ACCOUNT_POSITION_VALUE_LIMIT_EXCEEDED"
		| "INSTRUMENT_BID_REDUCE_ONLY"
		| "INSTRUMENT_ASK_REDUCE_ONLY"
		| "INSTRUMENT_BID_HALTED"
		| "INSTRUMENT_ASK_HALTED"
		| "STOP_LOSS_ON_FILL_GUARANTEED_BID_HALTED"
		| "STOP_LOSS_ON_FILL_GUARANTEED_ASK_HALTED"
	export type OrderCancelTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		orderID: string
		clientOrderID: string
		reason:
			| "INTERNAL_SERVER_ERROR"
			| "ACCOUNT_LOCKED"
			| "ACCOUNT_NEW_POSITIONS_LOCKED"
			| "ACCOUNT_ORDER_CREATION_LOCKED"
			| "ACCOUNT_ORDER_FILL_LOCKED"
			| "CLIENT_REQUEST"
			| "MIGRATION"
			| "MARKET_HALTED"
			| "LINKED_TRADE_CLOSED"
			| "TIME_IN_FORCE_EXPIRED"
			| "INSUFFICIENT_MARGIN"
			| "FIFO_VIOLATION"
			| "BOUNDS_VIOLATION"
			| "CLIENT_REQUEST_REPLACED"
			| "INSUFFICIENT_LIQUIDITY"
			| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "TAKE_PROFIT_ON_FILL_LOSS"
			| "LOSING_TAKE_PROFIT"
			| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "STOP_LOSS_ON_FILL_LOSS"
			| "STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "STOP_LOSS_ON_FILL_REQUIRED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
			| "STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_HEDGING_NOT_ALLOWED"
			| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
			| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "TAKE_PROFIT_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "CLIENT_TRADE_ID_ALREADY_EXISTS"
			| "POSITION_CLOSEOUT_FAILED"
			| "OPEN_TRADES_ALLOWED_EXCEEDED"
			| "PENDING_ORDERS_ALLOWED_EXCEEDED"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS"
			| "POSITION_SIZE_EXCEEDED"
			| "HEDGING_GSLO_VIOLATION"
			| "ACCOUNT_POSITION_VALUE_LIMIT_EXCEEDED"
			| "INSTRUMENT_BID_REDUCE_ONLY"
			| "INSTRUMENT_ASK_REDUCE_ONLY"
			| "INSTRUMENT_BID_HALTED"
			| "INSTRUMENT_ASK_HALTED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_BID_HALTED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_ASK_HALTED"
		replacedByOrderID: string
	}>
	export type OrderCancelRejectTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		orderID: string
		clientOrderID: string
		rejectReason:
			| "INTERNAL_SERVER_ERROR"
			| "INSTRUMENT_PRICE_UNKNOWN"
			| "ACCOUNT_NOT_ACTIVE"
			| "ACCOUNT_LOCKED"
			| "ACCOUNT_ORDER_CREATION_LOCKED"
			| "ACCOUNT_CONFIGURATION_LOCKED"
			| "ACCOUNT_DEPOSIT_LOCKED"
			| "ACCOUNT_WITHDRAWAL_LOCKED"
			| "ACCOUNT_ORDER_CANCEL_LOCKED"
			| "INSTRUMENT_NOT_TRADEABLE"
			| "PENDING_ORDERS_ALLOWED_EXCEEDED"
			| "ORDER_ID_UNSPECIFIED"
			| "ORDER_DOESNT_EXIST"
			| "ORDER_IDENTIFIER_INCONSISTENCY"
			| "TRADE_ID_UNSPECIFIED"
			| "TRADE_DOESNT_EXIST"
			| "TRADE_IDENTIFIER_INCONSISTENCY"
			| "INSUFFICIENT_MARGIN"
			| "INSTRUMENT_MISSING"
			| "INSTRUMENT_UNKNOWN"
			| "UNITS_MISSING"
			| "UNITS_INVALID"
			| "UNITS_PRECISION_EXCEEDED"
			| "UNITS_LIMIT_EXCEEDED"
			| "UNITS_MIMIMUM_NOT_MET"
			| "PRICE_MISSING"
			| "PRICE_INVALID"
			| "PRICE_PRECISION_EXCEEDED"
			| "PRICE_DISTANCE_MISSING"
			| "PRICE_DISTANCE_INVALID"
			| "PRICE_DISTANCE_PRECISION_EXCEEDED"
			| "PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "PRICE_DISTANCE_MINIMUM_NOT_MET"
			| "TIME_IN_FORCE_MISSING"
			| "TIME_IN_FORCE_INVALID"
			| "TIME_IN_FORCE_GTD_TIMESTAMP_MISSING"
			| "TIME_IN_FORCE_GTD_TIMESTAMP_IN_PAST"
			| "PRICE_BOUND_INVALID"
			| "PRICE_BOUND_PRECISION_EXCEEDED"
			| "ORDERS_ON_FILL_DUPLICATE_CLIENT_ORDER_IDS"
			| "TRADE_ON_FILL_CLIENT_EXTENSIONS_NOT_SUPPORTED"
			| "CLIENT_ORDER_ID_INVALID"
			| "CLIENT_ORDER_ID_ALREADY_EXISTS"
			| "CLIENT_ORDER_TAG_INVALID"
			| "CLIENT_ORDER_COMMENT_INVALID"
			| "CLIENT_TRADE_ID_INVALID"
			| "CLIENT_TRADE_ID_ALREADY_EXISTS"
			| "CLIENT_TRADE_TAG_INVALID"
			| "CLIENT_TRADE_COMMENT_INVALID"
			| "ORDER_FILL_POSITION_ACTION_MISSING"
			| "ORDER_FILL_POSITION_ACTION_INVALID"
			| "TRIGGER_CONDITION_MISSING"
			| "TRIGGER_CONDITION_INVALID"
			| "ORDER_PARTIAL_FILL_OPTION_MISSING"
			| "ORDER_PARTIAL_FILL_OPTION_INVALID"
			| "INVALID_REISSUE_IMMEDIATE_PARTIAL_FILL"
			| "TAKE_PROFIT_ORDER_ALREADY_EXISTS"
			| "TAKE_PROFIT_ON_FILL_PRICE_MISSING"
			| "TAKE_PROFIT_ON_FILL_PRICE_INVALID"
			| "TAKE_PROFIT_ON_FILL_PRICE_PRECISION_EXCEEDED"
			| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_MISSING"
			| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_INVALID"
			| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "STOP_LOSS_ORDER_ALREADY_EXISTS"
			| "STOP_LOSS_ORDER_GUARANTEED_REQUIRED"
			| "STOP_LOSS_ORDER_GUARANTEED_PRICE_WITHIN_SPREAD"
			| "STOP_LOSS_ORDER_GUARANTEED_NOT_ALLOWED"
			| "STOP_LOSS_ORDER_GUARANTEED_HALTED_CREATE_VIOLATION"
			| "STOP_LOSS_ORDER_GUARANTEED_HALTED_TIGHTEN_VIOLATION"
			| "STOP_LOSS_ORDER_GUARANTEED_HEDGING_NOT_ALLOWED"
			| "STOP_LOSS_ORDER_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
			| "STOP_LOSS_ORDER_NOT_CANCELABLE"
			| "STOP_LOSS_ORDER_NOT_REPLACEABLE"
			| "STOP_LOSS_ORDER_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
			| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
			| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_MISSING"
			| "STOP_LOSS_ON_FILL_REQUIRED_FOR_PENDING_ORDER"
			| "STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED"
			| "STOP_LOSS_ON_FILL_PRICE_MISSING"
			| "STOP_LOSS_ON_FILL_PRICE_INVALID"
			| "STOP_LOSS_ON_FILL_PRICE_PRECISION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
			| "STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_DISTANCE_INVALID"
			| "STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "STOP_LOSS_ON_FILL_DISTANCE_PRECISION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
			| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_MISSING"
			| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
			| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
			| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "TRAILING_STOP_LOSS_ORDER_ALREADY_EXISTS"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_PRECISION_EXCEEDED"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MINIMUM_NOT_MET"
			| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "TRAILING_STOP_LOSS_ORDERS_NOT_SUPPORTED"
			| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "CLOSE_TRADE_TYPE_MISSING"
			| "CLOSE_TRADE_PARTIAL_UNITS_MISSING"
			| "CLOSE_TRADE_UNITS_EXCEED_TRADE_SIZE"
			| "CLOSEOUT_POSITION_DOESNT_EXIST"
			| "CLOSEOUT_POSITION_INCOMPLETE_SPECIFICATION"
			| "CLOSEOUT_POSITION_UNITS_EXCEED_POSITION_SIZE"
			| "CLOSEOUT_POSITION_REJECT"
			| "CLOSEOUT_POSITION_PARTIAL_UNITS_MISSING"
			| "MARKUP_GROUP_ID_INVALID"
			| "POSITION_AGGREGATION_MODE_INVALID"
			| "ADMIN_CONFIGURE_DATA_MISSING"
			| "MARGIN_RATE_INVALID"
			| "MARGIN_RATE_WOULD_TRIGGER_CLOSEOUT"
			| "ALIAS_INVALID"
			| "CLIENT_CONFIGURE_DATA_MISSING"
			| "MARGIN_RATE_WOULD_TRIGGER_MARGIN_CALL"
			| "AMOUNT_INVALID"
			| "INSUFFICIENT_FUNDS"
			| "AMOUNT_MISSING"
			| "FUNDING_REASON_MISSING"
			| "CLIENT_EXTENSIONS_DATA_MISSING"
			| "REPLACING_ORDER_INVALID"
			| "REPLACING_TRADE_ID_INVALID"
	}>
	export type OrderClientExtensionsModifyTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		orderID: string
		clientOrderID: string
		clientExtensionsModify: ClientExtensions
		tradeClientExtensionsModify: ClientExtensions
	}>
	export type OrderClientExtensionsModifyRejectTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		orderID: string
		clientOrderID: string
		clientExtensionsModify: ClientExtensions
		tradeClientExtensionsModify: ClientExtensions
		rejectReason:
			| "INTERNAL_SERVER_ERROR"
			| "INSTRUMENT_PRICE_UNKNOWN"
			| "ACCOUNT_NOT_ACTIVE"
			| "ACCOUNT_LOCKED"
			| "ACCOUNT_ORDER_CREATION_LOCKED"
			| "ACCOUNT_CONFIGURATION_LOCKED"
			| "ACCOUNT_DEPOSIT_LOCKED"
			| "ACCOUNT_WITHDRAWAL_LOCKED"
			| "ACCOUNT_ORDER_CANCEL_LOCKED"
			| "INSTRUMENT_NOT_TRADEABLE"
			| "PENDING_ORDERS_ALLOWED_EXCEEDED"
			| "ORDER_ID_UNSPECIFIED"
			| "ORDER_DOESNT_EXIST"
			| "ORDER_IDENTIFIER_INCONSISTENCY"
			| "TRADE_ID_UNSPECIFIED"
			| "TRADE_DOESNT_EXIST"
			| "TRADE_IDENTIFIER_INCONSISTENCY"
			| "INSUFFICIENT_MARGIN"
			| "INSTRUMENT_MISSING"
			| "INSTRUMENT_UNKNOWN"
			| "UNITS_MISSING"
			| "UNITS_INVALID"
			| "UNITS_PRECISION_EXCEEDED"
			| "UNITS_LIMIT_EXCEEDED"
			| "UNITS_MIMIMUM_NOT_MET"
			| "PRICE_MISSING"
			| "PRICE_INVALID"
			| "PRICE_PRECISION_EXCEEDED"
			| "PRICE_DISTANCE_MISSING"
			| "PRICE_DISTANCE_INVALID"
			| "PRICE_DISTANCE_PRECISION_EXCEEDED"
			| "PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "PRICE_DISTANCE_MINIMUM_NOT_MET"
			| "TIME_IN_FORCE_MISSING"
			| "TIME_IN_FORCE_INVALID"
			| "TIME_IN_FORCE_GTD_TIMESTAMP_MISSING"
			| "TIME_IN_FORCE_GTD_TIMESTAMP_IN_PAST"
			| "PRICE_BOUND_INVALID"
			| "PRICE_BOUND_PRECISION_EXCEEDED"
			| "ORDERS_ON_FILL_DUPLICATE_CLIENT_ORDER_IDS"
			| "TRADE_ON_FILL_CLIENT_EXTENSIONS_NOT_SUPPORTED"
			| "CLIENT_ORDER_ID_INVALID"
			| "CLIENT_ORDER_ID_ALREADY_EXISTS"
			| "CLIENT_ORDER_TAG_INVALID"
			| "CLIENT_ORDER_COMMENT_INVALID"
			| "CLIENT_TRADE_ID_INVALID"
			| "CLIENT_TRADE_ID_ALREADY_EXISTS"
			| "CLIENT_TRADE_TAG_INVALID"
			| "CLIENT_TRADE_COMMENT_INVALID"
			| "ORDER_FILL_POSITION_ACTION_MISSING"
			| "ORDER_FILL_POSITION_ACTION_INVALID"
			| "TRIGGER_CONDITION_MISSING"
			| "TRIGGER_CONDITION_INVALID"
			| "ORDER_PARTIAL_FILL_OPTION_MISSING"
			| "ORDER_PARTIAL_FILL_OPTION_INVALID"
			| "INVALID_REISSUE_IMMEDIATE_PARTIAL_FILL"
			| "TAKE_PROFIT_ORDER_ALREADY_EXISTS"
			| "TAKE_PROFIT_ON_FILL_PRICE_MISSING"
			| "TAKE_PROFIT_ON_FILL_PRICE_INVALID"
			| "TAKE_PROFIT_ON_FILL_PRICE_PRECISION_EXCEEDED"
			| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_MISSING"
			| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_INVALID"
			| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "STOP_LOSS_ORDER_ALREADY_EXISTS"
			| "STOP_LOSS_ORDER_GUARANTEED_REQUIRED"
			| "STOP_LOSS_ORDER_GUARANTEED_PRICE_WITHIN_SPREAD"
			| "STOP_LOSS_ORDER_GUARANTEED_NOT_ALLOWED"
			| "STOP_LOSS_ORDER_GUARANTEED_HALTED_CREATE_VIOLATION"
			| "STOP_LOSS_ORDER_GUARANTEED_HALTED_TIGHTEN_VIOLATION"
			| "STOP_LOSS_ORDER_GUARANTEED_HEDGING_NOT_ALLOWED"
			| "STOP_LOSS_ORDER_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
			| "STOP_LOSS_ORDER_NOT_CANCELABLE"
			| "STOP_LOSS_ORDER_NOT_REPLACEABLE"
			| "STOP_LOSS_ORDER_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
			| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
			| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_MISSING"
			| "STOP_LOSS_ON_FILL_REQUIRED_FOR_PENDING_ORDER"
			| "STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED"
			| "STOP_LOSS_ON_FILL_PRICE_MISSING"
			| "STOP_LOSS_ON_FILL_PRICE_INVALID"
			| "STOP_LOSS_ON_FILL_PRICE_PRECISION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
			| "STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_DISTANCE_INVALID"
			| "STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "STOP_LOSS_ON_FILL_DISTANCE_PRECISION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
			| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_MISSING"
			| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
			| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
			| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "TRAILING_STOP_LOSS_ORDER_ALREADY_EXISTS"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_PRECISION_EXCEEDED"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MINIMUM_NOT_MET"
			| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "TRAILING_STOP_LOSS_ORDERS_NOT_SUPPORTED"
			| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "CLOSE_TRADE_TYPE_MISSING"
			| "CLOSE_TRADE_PARTIAL_UNITS_MISSING"
			| "CLOSE_TRADE_UNITS_EXCEED_TRADE_SIZE"
			| "CLOSEOUT_POSITION_DOESNT_EXIST"
			| "CLOSEOUT_POSITION_INCOMPLETE_SPECIFICATION"
			| "CLOSEOUT_POSITION_UNITS_EXCEED_POSITION_SIZE"
			| "CLOSEOUT_POSITION_REJECT"
			| "CLOSEOUT_POSITION_PARTIAL_UNITS_MISSING"
			| "MARKUP_GROUP_ID_INVALID"
			| "POSITION_AGGREGATION_MODE_INVALID"
			| "ADMIN_CONFIGURE_DATA_MISSING"
			| "MARGIN_RATE_INVALID"
			| "MARGIN_RATE_WOULD_TRIGGER_CLOSEOUT"
			| "ALIAS_INVALID"
			| "CLIENT_CONFIGURE_DATA_MISSING"
			| "MARGIN_RATE_WOULD_TRIGGER_MARGIN_CALL"
			| "AMOUNT_INVALID"
			| "INSUFFICIENT_FUNDS"
			| "AMOUNT_MISSING"
			| "FUNDING_REASON_MISSING"
			| "CLIENT_EXTENSIONS_DATA_MISSING"
			| "REPLACING_ORDER_INVALID"
			| "REPLACING_TRADE_ID_INVALID"
	}>
	export type TradeClientExtensionsModifyTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		tradeID: string
		clientTradeID: string
		tradeClientExtensionsModify: ClientExtensions
	}>
	export type TradeClientExtensionsModifyRejectTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		tradeID: string
		clientTradeID: string
		tradeClientExtensionsModify: ClientExtensions
		rejectReason:
			| "INTERNAL_SERVER_ERROR"
			| "INSTRUMENT_PRICE_UNKNOWN"
			| "ACCOUNT_NOT_ACTIVE"
			| "ACCOUNT_LOCKED"
			| "ACCOUNT_ORDER_CREATION_LOCKED"
			| "ACCOUNT_CONFIGURATION_LOCKED"
			| "ACCOUNT_DEPOSIT_LOCKED"
			| "ACCOUNT_WITHDRAWAL_LOCKED"
			| "ACCOUNT_ORDER_CANCEL_LOCKED"
			| "INSTRUMENT_NOT_TRADEABLE"
			| "PENDING_ORDERS_ALLOWED_EXCEEDED"
			| "ORDER_ID_UNSPECIFIED"
			| "ORDER_DOESNT_EXIST"
			| "ORDER_IDENTIFIER_INCONSISTENCY"
			| "TRADE_ID_UNSPECIFIED"
			| "TRADE_DOESNT_EXIST"
			| "TRADE_IDENTIFIER_INCONSISTENCY"
			| "INSUFFICIENT_MARGIN"
			| "INSTRUMENT_MISSING"
			| "INSTRUMENT_UNKNOWN"
			| "UNITS_MISSING"
			| "UNITS_INVALID"
			| "UNITS_PRECISION_EXCEEDED"
			| "UNITS_LIMIT_EXCEEDED"
			| "UNITS_MIMIMUM_NOT_MET"
			| "PRICE_MISSING"
			| "PRICE_INVALID"
			| "PRICE_PRECISION_EXCEEDED"
			| "PRICE_DISTANCE_MISSING"
			| "PRICE_DISTANCE_INVALID"
			| "PRICE_DISTANCE_PRECISION_EXCEEDED"
			| "PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "PRICE_DISTANCE_MINIMUM_NOT_MET"
			| "TIME_IN_FORCE_MISSING"
			| "TIME_IN_FORCE_INVALID"
			| "TIME_IN_FORCE_GTD_TIMESTAMP_MISSING"
			| "TIME_IN_FORCE_GTD_TIMESTAMP_IN_PAST"
			| "PRICE_BOUND_INVALID"
			| "PRICE_BOUND_PRECISION_EXCEEDED"
			| "ORDERS_ON_FILL_DUPLICATE_CLIENT_ORDER_IDS"
			| "TRADE_ON_FILL_CLIENT_EXTENSIONS_NOT_SUPPORTED"
			| "CLIENT_ORDER_ID_INVALID"
			| "CLIENT_ORDER_ID_ALREADY_EXISTS"
			| "CLIENT_ORDER_TAG_INVALID"
			| "CLIENT_ORDER_COMMENT_INVALID"
			| "CLIENT_TRADE_ID_INVALID"
			| "CLIENT_TRADE_ID_ALREADY_EXISTS"
			| "CLIENT_TRADE_TAG_INVALID"
			| "CLIENT_TRADE_COMMENT_INVALID"
			| "ORDER_FILL_POSITION_ACTION_MISSING"
			| "ORDER_FILL_POSITION_ACTION_INVALID"
			| "TRIGGER_CONDITION_MISSING"
			| "TRIGGER_CONDITION_INVALID"
			| "ORDER_PARTIAL_FILL_OPTION_MISSING"
			| "ORDER_PARTIAL_FILL_OPTION_INVALID"
			| "INVALID_REISSUE_IMMEDIATE_PARTIAL_FILL"
			| "TAKE_PROFIT_ORDER_ALREADY_EXISTS"
			| "TAKE_PROFIT_ON_FILL_PRICE_MISSING"
			| "TAKE_PROFIT_ON_FILL_PRICE_INVALID"
			| "TAKE_PROFIT_ON_FILL_PRICE_PRECISION_EXCEEDED"
			| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_MISSING"
			| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_INVALID"
			| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "STOP_LOSS_ORDER_ALREADY_EXISTS"
			| "STOP_LOSS_ORDER_GUARANTEED_REQUIRED"
			| "STOP_LOSS_ORDER_GUARANTEED_PRICE_WITHIN_SPREAD"
			| "STOP_LOSS_ORDER_GUARANTEED_NOT_ALLOWED"
			| "STOP_LOSS_ORDER_GUARANTEED_HALTED_CREATE_VIOLATION"
			| "STOP_LOSS_ORDER_GUARANTEED_HALTED_TIGHTEN_VIOLATION"
			| "STOP_LOSS_ORDER_GUARANTEED_HEDGING_NOT_ALLOWED"
			| "STOP_LOSS_ORDER_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
			| "STOP_LOSS_ORDER_NOT_CANCELABLE"
			| "STOP_LOSS_ORDER_NOT_REPLACEABLE"
			| "STOP_LOSS_ORDER_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
			| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
			| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_MISSING"
			| "STOP_LOSS_ON_FILL_REQUIRED_FOR_PENDING_ORDER"
			| "STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED"
			| "STOP_LOSS_ON_FILL_PRICE_MISSING"
			| "STOP_LOSS_ON_FILL_PRICE_INVALID"
			| "STOP_LOSS_ON_FILL_PRICE_PRECISION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
			| "STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_DISTANCE_INVALID"
			| "STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "STOP_LOSS_ON_FILL_DISTANCE_PRECISION_EXCEEDED"
			| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
			| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_MISSING"
			| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
			| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
			| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "TRAILING_STOP_LOSS_ORDER_ALREADY_EXISTS"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_PRECISION_EXCEEDED"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
			| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MINIMUM_NOT_MET"
			| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
			| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
			| "TRAILING_STOP_LOSS_ORDERS_NOT_SUPPORTED"
			| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
			| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
			| "CLOSE_TRADE_TYPE_MISSING"
			| "CLOSE_TRADE_PARTIAL_UNITS_MISSING"
			| "CLOSE_TRADE_UNITS_EXCEED_TRADE_SIZE"
			| "CLOSEOUT_POSITION_DOESNT_EXIST"
			| "CLOSEOUT_POSITION_INCOMPLETE_SPECIFICATION"
			| "CLOSEOUT_POSITION_UNITS_EXCEED_POSITION_SIZE"
			| "CLOSEOUT_POSITION_REJECT"
			| "CLOSEOUT_POSITION_PARTIAL_UNITS_MISSING"
			| "MARKUP_GROUP_ID_INVALID"
			| "POSITION_AGGREGATION_MODE_INVALID"
			| "ADMIN_CONFIGURE_DATA_MISSING"
			| "MARGIN_RATE_INVALID"
			| "MARGIN_RATE_WOULD_TRIGGER_CLOSEOUT"
			| "ALIAS_INVALID"
			| "CLIENT_CONFIGURE_DATA_MISSING"
			| "MARGIN_RATE_WOULD_TRIGGER_MARGIN_CALL"
			| "AMOUNT_INVALID"
			| "INSUFFICIENT_FUNDS"
			| "AMOUNT_MISSING"
			| "FUNDING_REASON_MISSING"
			| "CLIENT_EXTENSIONS_DATA_MISSING"
			| "REPLACING_ORDER_INVALID"
			| "REPLACING_TRADE_ID_INVALID"
	}>
	export type MarginCallEnterTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
	}>
	export type MarginCallExtendTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		extensionNumber: number
	}>
	export type MarginCallExitTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
	}>
	export type DelayedTradeClosureTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		reason:
			| "CLIENT_ORDER"
			| "TRADE_CLOSE"
			| "POSITION_CLOSEOUT"
			| "MARGIN_CLOSEOUT"
			| "DELAYED_TRADE_CLOSE"
		tradeIDs: string
	}>
	export type OpenTradeFinancing = Partial<{
		tradeID: string
		financing: string
	}>
	export type PositionFinancing = Partial<{
		instrument: string
		financing: string
		openTradeFinancings: Array<OpenTradeFinancing>
	}>
	export type DailyFinancingTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
		financing: string
		accountBalance: string
		accountFinancingMode: "NO_FINANCING" | "SECOND_BY_SECOND" | "DAILY"
		positionFinancings: Array<PositionFinancing>
	}>
	export type ResetResettablePLTransaction = Partial<{
		id: string
		time: string
		userID: number
		accountID: string
		batchID: string
		requestID: string
		type:
			| "CREATE"
			| "CLOSE"
			| "REOPEN"
			| "CLIENT_CONFIGURE"
			| "CLIENT_CONFIGURE_REJECT"
			| "TRANSFER_FUNDS"
			| "TRANSFER_FUNDS_REJECT"
			| "MARKET_ORDER"
			| "MARKET_ORDER_REJECT"
			| "FIXED_PRICE_ORDER"
			| "LIMIT_ORDER"
			| "LIMIT_ORDER_REJECT"
			| "STOP_ORDER"
			| "STOP_ORDER_REJECT"
			| "MARKET_IF_TOUCHED_ORDER"
			| "MARKET_IF_TOUCHED_ORDER_REJECT"
			| "TAKE_PROFIT_ORDER"
			| "TAKE_PROFIT_ORDER_REJECT"
			| "STOP_LOSS_ORDER"
			| "STOP_LOSS_ORDER_REJECT"
			| "TRAILING_STOP_LOSS_ORDER"
			| "TRAILING_STOP_LOSS_ORDER_REJECT"
			| "ORDER_FILL"
			| "ORDER_CANCEL"
			| "ORDER_CANCEL_REJECT"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY"
			| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY"
			| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
			| "MARGIN_CALL_ENTER"
			| "MARGIN_CALL_EXTEND"
			| "MARGIN_CALL_EXIT"
			| "DELAYED_TRADE_CLOSURE"
			| "DAILY_FINANCING"
			| "RESET_RESETTABLE_PL"
	}>
	export type ClientID = string
	export type ClientTag = string
	export type ClientComment = string
	export type MarketOrderMarginCloseoutReason =
		| "MARGIN_CHECK_VIOLATION"
		| "REGULATORY_MARGIN_CALL_VIOLATION"
		| "REGULATORY_MARGIN_CHECK_VIOLATION"
	export type LiquidityRegenerationScheduleStep = Partial<{
		timestamp: string
		bidLiquidityUsed: string
		askLiquidityUsed: string
	}>
	export type LiquidityRegenerationSchedule = Partial<{
		steps: Array<LiquidityRegenerationScheduleStep>
	}>
	export type RequestID = string
	export type ClientRequestID = string
	export type TransactionRejectReason =
		| "INTERNAL_SERVER_ERROR"
		| "INSTRUMENT_PRICE_UNKNOWN"
		| "ACCOUNT_NOT_ACTIVE"
		| "ACCOUNT_LOCKED"
		| "ACCOUNT_ORDER_CREATION_LOCKED"
		| "ACCOUNT_CONFIGURATION_LOCKED"
		| "ACCOUNT_DEPOSIT_LOCKED"
		| "ACCOUNT_WITHDRAWAL_LOCKED"
		| "ACCOUNT_ORDER_CANCEL_LOCKED"
		| "INSTRUMENT_NOT_TRADEABLE"
		| "PENDING_ORDERS_ALLOWED_EXCEEDED"
		| "ORDER_ID_UNSPECIFIED"
		| "ORDER_DOESNT_EXIST"
		| "ORDER_IDENTIFIER_INCONSISTENCY"
		| "TRADE_ID_UNSPECIFIED"
		| "TRADE_DOESNT_EXIST"
		| "TRADE_IDENTIFIER_INCONSISTENCY"
		| "INSUFFICIENT_MARGIN"
		| "INSTRUMENT_MISSING"
		| "INSTRUMENT_UNKNOWN"
		| "UNITS_MISSING"
		| "UNITS_INVALID"
		| "UNITS_PRECISION_EXCEEDED"
		| "UNITS_LIMIT_EXCEEDED"
		| "UNITS_MIMIMUM_NOT_MET"
		| "PRICE_MISSING"
		| "PRICE_INVALID"
		| "PRICE_PRECISION_EXCEEDED"
		| "PRICE_DISTANCE_MISSING"
		| "PRICE_DISTANCE_INVALID"
		| "PRICE_DISTANCE_PRECISION_EXCEEDED"
		| "PRICE_DISTANCE_MAXIMUM_EXCEEDED"
		| "PRICE_DISTANCE_MINIMUM_NOT_MET"
		| "TIME_IN_FORCE_MISSING"
		| "TIME_IN_FORCE_INVALID"
		| "TIME_IN_FORCE_GTD_TIMESTAMP_MISSING"
		| "TIME_IN_FORCE_GTD_TIMESTAMP_IN_PAST"
		| "PRICE_BOUND_INVALID"
		| "PRICE_BOUND_PRECISION_EXCEEDED"
		| "ORDERS_ON_FILL_DUPLICATE_CLIENT_ORDER_IDS"
		| "TRADE_ON_FILL_CLIENT_EXTENSIONS_NOT_SUPPORTED"
		| "CLIENT_ORDER_ID_INVALID"
		| "CLIENT_ORDER_ID_ALREADY_EXISTS"
		| "CLIENT_ORDER_TAG_INVALID"
		| "CLIENT_ORDER_COMMENT_INVALID"
		| "CLIENT_TRADE_ID_INVALID"
		| "CLIENT_TRADE_ID_ALREADY_EXISTS"
		| "CLIENT_TRADE_TAG_INVALID"
		| "CLIENT_TRADE_COMMENT_INVALID"
		| "ORDER_FILL_POSITION_ACTION_MISSING"
		| "ORDER_FILL_POSITION_ACTION_INVALID"
		| "TRIGGER_CONDITION_MISSING"
		| "TRIGGER_CONDITION_INVALID"
		| "ORDER_PARTIAL_FILL_OPTION_MISSING"
		| "ORDER_PARTIAL_FILL_OPTION_INVALID"
		| "INVALID_REISSUE_IMMEDIATE_PARTIAL_FILL"
		| "TAKE_PROFIT_ORDER_ALREADY_EXISTS"
		| "TAKE_PROFIT_ON_FILL_PRICE_MISSING"
		| "TAKE_PROFIT_ON_FILL_PRICE_INVALID"
		| "TAKE_PROFIT_ON_FILL_PRICE_PRECISION_EXCEEDED"
		| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_MISSING"
		| "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_INVALID"
		| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_MISSING"
		| "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST"
		| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_INVALID"
		| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_TAG_INVALID"
		| "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
		| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_MISSING"
		| "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_INVALID"
		| "STOP_LOSS_ORDER_ALREADY_EXISTS"
		| "STOP_LOSS_ORDER_GUARANTEED_REQUIRED"
		| "STOP_LOSS_ORDER_GUARANTEED_PRICE_WITHIN_SPREAD"
		| "STOP_LOSS_ORDER_GUARANTEED_NOT_ALLOWED"
		| "STOP_LOSS_ORDER_GUARANTEED_HALTED_CREATE_VIOLATION"
		| "STOP_LOSS_ORDER_GUARANTEED_HALTED_TIGHTEN_VIOLATION"
		| "STOP_LOSS_ORDER_GUARANTEED_HEDGING_NOT_ALLOWED"
		| "STOP_LOSS_ORDER_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
		| "STOP_LOSS_ORDER_NOT_CANCELABLE"
		| "STOP_LOSS_ORDER_NOT_REPLACEABLE"
		| "STOP_LOSS_ORDER_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
		| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
		| "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_MISSING"
		| "STOP_LOSS_ON_FILL_REQUIRED_FOR_PENDING_ORDER"
		| "STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED"
		| "STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED"
		| "STOP_LOSS_ON_FILL_PRICE_MISSING"
		| "STOP_LOSS_ON_FILL_PRICE_INVALID"
		| "STOP_LOSS_ON_FILL_PRICE_PRECISION_EXCEEDED"
		| "STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET"
		| "STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED"
		| "STOP_LOSS_ON_FILL_DISTANCE_INVALID"
		| "STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
		| "STOP_LOSS_ON_FILL_DISTANCE_PRECISION_EXCEEDED"
		| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_SPECIFIED"
		| "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_MISSING"
		| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
		| "STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
		| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
		| "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
		| "STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
		| "STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
		| "STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
		| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
		| "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
		| "TRAILING_STOP_LOSS_ORDER_ALREADY_EXISTS"
		| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MISSING"
		| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_INVALID"
		| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_PRECISION_EXCEEDED"
		| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED"
		| "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MINIMUM_NOT_MET"
		| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING"
		| "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID"
		| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING"
		| "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST"
		| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID"
		| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID"
		| "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID"
		| "TRAILING_STOP_LOSS_ORDERS_NOT_SUPPORTED"
		| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING"
		| "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID"
		| "CLOSE_TRADE_TYPE_MISSING"
		| "CLOSE_TRADE_PARTIAL_UNITS_MISSING"
		| "CLOSE_TRADE_UNITS_EXCEED_TRADE_SIZE"
		| "CLOSEOUT_POSITION_DOESNT_EXIST"
		| "CLOSEOUT_POSITION_INCOMPLETE_SPECIFICATION"
		| "CLOSEOUT_POSITION_UNITS_EXCEED_POSITION_SIZE"
		| "CLOSEOUT_POSITION_REJECT"
		| "CLOSEOUT_POSITION_PARTIAL_UNITS_MISSING"
		| "MARKUP_GROUP_ID_INVALID"
		| "POSITION_AGGREGATION_MODE_INVALID"
		| "ADMIN_CONFIGURE_DATA_MISSING"
		| "MARGIN_RATE_INVALID"
		| "MARGIN_RATE_WOULD_TRIGGER_CLOSEOUT"
		| "ALIAS_INVALID"
		| "CLIENT_CONFIGURE_DATA_MISSING"
		| "MARGIN_RATE_WOULD_TRIGGER_MARGIN_CALL"
		| "AMOUNT_INVALID"
		| "INSUFFICIENT_FUNDS"
		| "AMOUNT_MISSING"
		| "FUNDING_REASON_MISSING"
		| "CLIENT_EXTENSIONS_DATA_MISSING"
		| "REPLACING_ORDER_INVALID"
		| "REPLACING_TRADE_ID_INVALID"
	export type TransactionFilter =
		| "ORDER"
		| "FUNDING"
		| "ADMIN"
		| "CREATE"
		| "CLOSE"
		| "REOPEN"
		| "CLIENT_CONFIGURE"
		| "CLIENT_CONFIGURE_REJECT"
		| "TRANSFER_FUNDS"
		| "TRANSFER_FUNDS_REJECT"
		| "MARKET_ORDER"
		| "MARKET_ORDER_REJECT"
		| "LIMIT_ORDER"
		| "LIMIT_ORDER_REJECT"
		| "STOP_ORDER"
		| "STOP_ORDER_REJECT"
		| "MARKET_IF_TOUCHED_ORDER"
		| "MARKET_IF_TOUCHED_ORDER_REJECT"
		| "TAKE_PROFIT_ORDER"
		| "TAKE_PROFIT_ORDER_REJECT"
		| "STOP_LOSS_ORDER"
		| "STOP_LOSS_ORDER_REJECT"
		| "TRAILING_STOP_LOSS_ORDER"
		| "TRAILING_STOP_LOSS_ORDER_REJECT"
		| "ONE_CANCELS_ALL_ORDER"
		| "ONE_CANCELS_ALL_ORDER_REJECT"
		| "ONE_CANCELS_ALL_ORDER_TRIGGERED"
		| "ORDER_FILL"
		| "ORDER_CANCEL"
		| "ORDER_CANCEL_REJECT"
		| "ORDER_CLIENT_EXTENSIONS_MODIFY"
		| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
		| "TRADE_CLIENT_EXTENSIONS_MODIFY"
		| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
		| "MARGIN_CALL_ENTER"
		| "MARGIN_CALL_EXTEND"
		| "MARGIN_CALL_EXIT"
		| "DELAYED_TRADE_CLOSURE"
		| "DAILY_FINANCING"
		| "RESET_RESETTABLE_PL"
	export type TransactionHeartbeat = Partial<{
		type: string
		lastTransactionID: string
		time: string
	}>
	export type UserSpecifier = string
	export type UserInfo = Partial<{
		username: string
		userID: number
		country: string
		emailAddress: string
	}>
	export type UserInfoExternal = Partial<{
		userID: number
		country: string
		FIFO: boolean
	}>
	export type PriceStatus = "tradeable" | "non-tradeable" | "invalid"
	export type HomeConversions = Partial<{
		currency: string
		accountGain: string
		accountLoss: string
		positionValue: string
	}>
	export type PricingHeartbeat = Partial<{ type: string; time: string }>
	export type OrderID = string
	export type OrderType =
		| "MARKET"
		| "LIMIT"
		| "STOP"
		| "MARKET_IF_TOUCHED"
		| "TAKE_PROFIT"
		| "STOP_LOSS"
		| "TRAILING_STOP_LOSS"
		| "FIXED_PRICE"
	export type CancellableOrderType =
		| "LIMIT"
		| "STOP"
		| "MARKET_IF_TOUCHED"
		| "TAKE_PROFIT"
		| "STOP_LOSS"
		| "TRAILING_STOP_LOSS"
	export type OrderState = "PENDING" | "FILLED" | "TRIGGERED" | "CANCELLED"
	export type OrderStateFilter =
		| "PENDING"
		| "FILLED"
		| "TRIGGERED"
		| "CANCELLED"
		| "ALL"
	export type OrderIdentifier = Partial<{
		orderID: string
		clientOrderID: string
	}>
	export type OrderSpecifier = string
	export type TimeInForce = "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
	export type OrderPositionFill =
		| "OPEN_ONLY"
		| "REDUCE_FIRST"
		| "REDUCE_ONLY"
		| "DEFAULT"
	export type OrderTriggerCondition =
		| "DEFAULT"
		| "INVERSE"
		| "BID"
		| "ASK"
		| "MID"
	export type MarketOrder = Partial<{
		id: string
		createTime: string
		state: "PENDING" | "FILLED" | "TRIGGERED" | "CANCELLED"
		clientExtensions: ClientExtensions
		type:
			| "MARKET"
			| "LIMIT"
			| "STOP"
			| "MARKET_IF_TOUCHED"
			| "TAKE_PROFIT"
			| "STOP_LOSS"
			| "TRAILING_STOP_LOSS"
			| "FIXED_PRICE"
		instrument: string
		units: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		priceBound: string
		positionFill: "OPEN_ONLY" | "REDUCE_FIRST" | "REDUCE_ONLY" | "DEFAULT"
		tradeClose: MarketOrderTradeClose
		longPositionCloseout: MarketOrderPositionCloseout
		shortPositionCloseout: MarketOrderPositionCloseout
		marginCloseout: MarketOrderMarginCloseout
		delayedTradeClose: MarketOrderDelayedTradeClose
		takeProfitOnFill: TakeProfitDetails
		stopLossOnFill: StopLossDetails
		trailingStopLossOnFill: TrailingStopLossDetails
		tradeClientExtensions: ClientExtensions
		fillingTransactionID: string
		filledTime: string
		tradeOpenedID: string
		tradeReducedID: string
		tradeClosedIDs: Array<string>
		cancellingTransactionID: string
		cancelledTime: string
	}>
	export type FixedPriceOrder = Partial<{
		id: string
		createTime: string
		state: "PENDING" | "FILLED" | "TRIGGERED" | "CANCELLED"
		clientExtensions: ClientExtensions
		type:
			| "MARKET"
			| "LIMIT"
			| "STOP"
			| "MARKET_IF_TOUCHED"
			| "TAKE_PROFIT"
			| "STOP_LOSS"
			| "TRAILING_STOP_LOSS"
			| "FIXED_PRICE"
		instrument: string
		units: string
		price: string
		positionFill: "OPEN_ONLY" | "REDUCE_FIRST" | "REDUCE_ONLY" | "DEFAULT"
		tradeState: string
		takeProfitOnFill: TakeProfitDetails
		stopLossOnFill: StopLossDetails
		trailingStopLossOnFill: TrailingStopLossDetails
		tradeClientExtensions: ClientExtensions
		fillingTransactionID: string
		filledTime: string
		tradeOpenedID: string
		tradeReducedID: string
		tradeClosedIDs: Array<string>
		cancellingTransactionID: string
		cancelledTime: string
	}>
	export type LimitOrder = Partial<{
		id: string
		createTime: string
		state: "PENDING" | "FILLED" | "TRIGGERED" | "CANCELLED"
		clientExtensions: ClientExtensions
		type:
			| "MARKET"
			| "LIMIT"
			| "STOP"
			| "MARKET_IF_TOUCHED"
			| "TAKE_PROFIT"
			| "STOP_LOSS"
			| "TRAILING_STOP_LOSS"
			| "FIXED_PRICE"
		instrument: string
		units: string
		price: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		positionFill: "OPEN_ONLY" | "REDUCE_FIRST" | "REDUCE_ONLY" | "DEFAULT"
		triggerCondition: "DEFAULT" | "INVERSE" | "BID" | "ASK" | "MID"
		takeProfitOnFill: TakeProfitDetails
		stopLossOnFill: StopLossDetails
		trailingStopLossOnFill: TrailingStopLossDetails
		tradeClientExtensions: ClientExtensions
		fillingTransactionID: string
		filledTime: string
		tradeOpenedID: string
		tradeReducedID: string
		tradeClosedIDs: Array<string>
		cancellingTransactionID: string
		cancelledTime: string
		replacesOrderID: string
		replacedByOrderID: string
	}>
	export type StopOrder = Partial<{
		id: string
		createTime: string
		state: "PENDING" | "FILLED" | "TRIGGERED" | "CANCELLED"
		clientExtensions: ClientExtensions
		type:
			| "MARKET"
			| "LIMIT"
			| "STOP"
			| "MARKET_IF_TOUCHED"
			| "TAKE_PROFIT"
			| "STOP_LOSS"
			| "TRAILING_STOP_LOSS"
			| "FIXED_PRICE"
		instrument: string
		units: string
		price: string
		priceBound: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		positionFill: "OPEN_ONLY" | "REDUCE_FIRST" | "REDUCE_ONLY" | "DEFAULT"
		triggerCondition: "DEFAULT" | "INVERSE" | "BID" | "ASK" | "MID"
		takeProfitOnFill: TakeProfitDetails
		stopLossOnFill: StopLossDetails
		trailingStopLossOnFill: TrailingStopLossDetails
		tradeClientExtensions: ClientExtensions
		fillingTransactionID: string
		filledTime: string
		tradeOpenedID: string
		tradeReducedID: string
		tradeClosedIDs: Array<string>
		cancellingTransactionID: string
		cancelledTime: string
		replacesOrderID: string
		replacedByOrderID: string
	}>
	export type MarketIfTouchedOrder = Partial<{
		id: string
		createTime: string
		state: "PENDING" | "FILLED" | "TRIGGERED" | "CANCELLED"
		clientExtensions: ClientExtensions
		type:
			| "MARKET"
			| "LIMIT"
			| "STOP"
			| "MARKET_IF_TOUCHED"
			| "TAKE_PROFIT"
			| "STOP_LOSS"
			| "TRAILING_STOP_LOSS"
			| "FIXED_PRICE"
		instrument: string
		units: string
		price: string
		priceBound: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		positionFill: "OPEN_ONLY" | "REDUCE_FIRST" | "REDUCE_ONLY" | "DEFAULT"
		triggerCondition: "DEFAULT" | "INVERSE" | "BID" | "ASK" | "MID"
		initialMarketPrice: string
		takeProfitOnFill: TakeProfitDetails
		stopLossOnFill: StopLossDetails
		trailingStopLossOnFill: TrailingStopLossDetails
		tradeClientExtensions: ClientExtensions
		fillingTransactionID: string
		filledTime: string
		tradeOpenedID: string
		tradeReducedID: string
		tradeClosedIDs: Array<string>
		cancellingTransactionID: string
		cancelledTime: string
		replacesOrderID: string
		replacedByOrderID: string
	}>
	export type OrderRequest = Record<string, unknown>
	export type MarketOrderRequest = Partial<{
		type:
			| "MARKET"
			| "LIMIT"
			| "STOP"
			| "MARKET_IF_TOUCHED"
			| "TAKE_PROFIT"
			| "STOP_LOSS"
			| "TRAILING_STOP_LOSS"
			| "FIXED_PRICE"
		instrument: string
		units: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		priceBound: string
		positionFill: "OPEN_ONLY" | "REDUCE_FIRST" | "REDUCE_ONLY" | "DEFAULT"
		clientExtensions: ClientExtensions
		takeProfitOnFill: TakeProfitDetails
		stopLossOnFill: StopLossDetails
		trailingStopLossOnFill: TrailingStopLossDetails
		tradeClientExtensions: ClientExtensions
	}>
	export type LimitOrderRequest = Partial<{
		type:
			| "MARKET"
			| "LIMIT"
			| "STOP"
			| "MARKET_IF_TOUCHED"
			| "TAKE_PROFIT"
			| "STOP_LOSS"
			| "TRAILING_STOP_LOSS"
			| "FIXED_PRICE"
		instrument: string
		units: string
		price: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		positionFill: "OPEN_ONLY" | "REDUCE_FIRST" | "REDUCE_ONLY" | "DEFAULT"
		triggerCondition: "DEFAULT" | "INVERSE" | "BID" | "ASK" | "MID"
		clientExtensions: ClientExtensions
		takeProfitOnFill: TakeProfitDetails
		stopLossOnFill: StopLossDetails
		trailingStopLossOnFill: TrailingStopLossDetails
		tradeClientExtensions: ClientExtensions
	}>
	export type StopOrderRequest = Partial<{
		type:
			| "MARKET"
			| "LIMIT"
			| "STOP"
			| "MARKET_IF_TOUCHED"
			| "TAKE_PROFIT"
			| "STOP_LOSS"
			| "TRAILING_STOP_LOSS"
			| "FIXED_PRICE"
		instrument: string
		units: string
		price: string
		priceBound: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		positionFill: "OPEN_ONLY" | "REDUCE_FIRST" | "REDUCE_ONLY" | "DEFAULT"
		triggerCondition: "DEFAULT" | "INVERSE" | "BID" | "ASK" | "MID"
		clientExtensions: ClientExtensions
		takeProfitOnFill: TakeProfitDetails
		stopLossOnFill: StopLossDetails
		trailingStopLossOnFill: TrailingStopLossDetails
		tradeClientExtensions: ClientExtensions
	}>
	export type MarketIfTouchedOrderRequest = Partial<{
		type:
			| "MARKET"
			| "LIMIT"
			| "STOP"
			| "MARKET_IF_TOUCHED"
			| "TAKE_PROFIT"
			| "STOP_LOSS"
			| "TRAILING_STOP_LOSS"
			| "FIXED_PRICE"
		instrument: string
		units: string
		price: string
		priceBound: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		positionFill: "OPEN_ONLY" | "REDUCE_FIRST" | "REDUCE_ONLY" | "DEFAULT"
		triggerCondition: "DEFAULT" | "INVERSE" | "BID" | "ASK" | "MID"
		clientExtensions: ClientExtensions
		takeProfitOnFill: TakeProfitDetails
		stopLossOnFill: StopLossDetails
		trailingStopLossOnFill: TrailingStopLossDetails
		tradeClientExtensions: ClientExtensions
	}>
	export type TakeProfitOrderRequest = Partial<{
		type:
			| "MARKET"
			| "LIMIT"
			| "STOP"
			| "MARKET_IF_TOUCHED"
			| "TAKE_PROFIT"
			| "STOP_LOSS"
			| "TRAILING_STOP_LOSS"
			| "FIXED_PRICE"
		tradeID: string
		clientTradeID: string
		price: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		triggerCondition: "DEFAULT" | "INVERSE" | "BID" | "ASK" | "MID"
		clientExtensions: ClientExtensions
	}>
	export type StopLossOrderRequest = Partial<{
		type:
			| "MARKET"
			| "LIMIT"
			| "STOP"
			| "MARKET_IF_TOUCHED"
			| "TAKE_PROFIT"
			| "STOP_LOSS"
			| "TRAILING_STOP_LOSS"
			| "FIXED_PRICE"
		tradeID: string
		clientTradeID: string
		price: string
		distance: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		triggerCondition: "DEFAULT" | "INVERSE" | "BID" | "ASK" | "MID"
		guaranteed: boolean
		clientExtensions: ClientExtensions
	}>
	export type TrailingStopLossOrderRequest = Partial<{
		type:
			| "MARKET"
			| "LIMIT"
			| "STOP"
			| "MARKET_IF_TOUCHED"
			| "TAKE_PROFIT"
			| "STOP_LOSS"
			| "TRAILING_STOP_LOSS"
			| "FIXED_PRICE"
		tradeID: string
		clientTradeID: string
		distance: string
		timeInForce: "GTC" | "GTD" | "GFD" | "FOK" | "IOC"
		gtdTime: string
		triggerCondition: "DEFAULT" | "INVERSE" | "BID" | "ASK" | "MID"
		clientExtensions: ClientExtensions
	}>
	export type GuaranteedStopLossOrderEntryData = Partial<{
		minimumDistance: string
		premium: string
		levelRestriction: GuaranteedStopLossOrderLevelRestriction
	}>
	export type PriceValue = string
	export type Price = Partial<{
		instrument: string
		tradeable: boolean
		timestamp: string
		baseBid: string
		baseAsk: string
		bids: Array<PriceBucket>
		asks: Array<PriceBucket>
		closeoutBid: string
		closeoutAsk: string
	}>

	// </Schemas>
}

export namespace Endpoints {
	// <Endpoints>

	export type get_GetInstrumentCandles = {
		method: "GET"
		path: "/instruments/{instrument}/candles"
		requestFormat: "json"
		parameters: {
			query: Partial<{
				price: string
				granularity: string
				count: number
				from: string
				to: string
				smooth: boolean
				includeFirst: boolean
				dailyAlignment: number
				alignmentTimezone: string
				weeklyAlignment: string
			}>
			path: { instrument: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
		}
		response: Partial<{
			instrument: string
			granularity:
				| "S5"
				| "S10"
				| "S15"
				| "S30"
				| "M1"
				| "M2"
				| "M4"
				| "M5"
				| "M10"
				| "M15"
				| "M30"
				| "H1"
				| "H2"
				| "H3"
				| "H4"
				| "H6"
				| "H8"
				| "H12"
				| "D"
				| "W"
				| "M"
			candles: Array<Schemas.Candlestick>
		}>
	}
	export type get_GetInstrumentPrice = {
		method: "GET"
		path: "/instruments/{instrument}/price"
		requestFormat: "json"
		parameters: {
			query: Partial<{ time: string }>
			path: { instrument: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
		}
		response: Partial<{ price: Schemas.Price }>
	}
	export type get_GetInstrumentPriceRange = {
		method: "GET"
		path: "/instruments/{instrument}/price/range"
		requestFormat: "json"
		parameters: {
			query: { from: string; to: string | undefined }
			path: { instrument: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
		}
		response: Partial<{ prices: Array<Schemas.Price> }>
	}
	export type get_InstrumentsInstrumentorderBook = {
		method: "GET"
		path: "/instruments/{instrument}/orderBook"
		requestFormat: "json"
		parameters: {
			query: Partial<{ time: string }>
			path: { instrument: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
		}
		response: Partial<{ orderBook: Schemas.OrderBook }>
	}
	export type get_InstrumentsInstrumentpositionBook = {
		method: "GET"
		path: "/instruments/{instrument}/positionBook"
		requestFormat: "json"
		parameters: {
			query: Partial<{ time: string }>
			path: { instrument: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
		}
		response: Partial<{ positionBook: Schemas.PositionBook }>
	}
	export type get_ListPositions = {
		method: "GET"
		path: "/accounts/{accountID}/positions"
		requestFormat: "json"
		parameters: {
			path: { accountID: string }
			header: { Authorization: string }
		}
		response: Partial<{
			positions: Array<Schemas.Position>
			lastTransactionID: string
		}>
	}
	export type get_ListOpenPositions = {
		method: "GET"
		path: "/accounts/{accountID}/openPositions"
		requestFormat: "json"
		parameters: {
			path: { accountID: string }
			header: { Authorization: string }
		}
		response: Partial<{
			positions: Array<Schemas.Position>
			lastTransactionID: string
		}>
	}
	export type get_GetPosition = {
		method: "GET"
		path: "/accounts/{accountID}/positions/{instrument}"
		requestFormat: "json"
		parameters: {
			path: { accountID: string; instrument: string }
			header: { Authorization: string }
		}
		response: Partial<{ position: Schemas.Position; lastTransactionID: string }>
	}
	export type put_ClosePosition = {
		method: "PUT"
		path: "/accounts/{accountID}/positions/{instrument}/close"
		requestFormat: "json"
		parameters: {
			path: { accountID: string; instrument: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
			body: Partial<{
				longUnits: string
				longClientExtensions: Schemas.ClientExtensions
				shortUnits: string
				shortClientExtensions: Schemas.ClientExtensions
			}>
		}
		response: Partial<{
			longOrderCreateTransaction: Schemas.MarketOrderTransaction
			longOrderFillTransaction: Schemas.OrderFillTransaction
			longOrderCancelTransaction: Schemas.OrderCancelTransaction
			shortOrderCreateTransaction: Schemas.MarketOrderTransaction
			shortOrderFillTransaction: Schemas.OrderFillTransaction
			shortOrderCancelTransaction: Schemas.OrderCancelTransaction
			relatedTransactionIDs: Array<string>
			lastTransactionID: string
		}>
	}
	export type get_ListTrades = {
		method: "GET"
		path: "/accounts/{accountID}/trades"
		requestFormat: "json"
		parameters: {
			query: Partial<{
				ids: Array<string>
				state: string
				instrument: string
				count: number
				beforeID: string
			}>
			path: { accountID: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
		}
		response: Partial<{
			trades: Array<Schemas.Trade>
			lastTransactionID: string
		}>
	}
	export type get_ListOpenTrades = {
		method: "GET"
		path: "/accounts/{accountID}/openTrades"
		requestFormat: "json"
		parameters: {
			path: { accountID: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
		}
		response: Partial<{
			trades: Array<Schemas.Trade>
			lastTransactionID: string
		}>
	}
	export type get_GetTrade = {
		method: "GET"
		path: "/accounts/{accountID}/trades/{tradeSpecifier}"
		requestFormat: "json"
		parameters: {
			path: { accountID: string; tradeSpecifier: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
		}
		response: Partial<{ trade: Schemas.Trade; lastTransactionID: string }>
	}
	export type put_CloseTrade = {
		method: "PUT"
		path: "/accounts/{accountID}/trades/{tradeSpecifier}/close"
		requestFormat: "json"
		parameters: {
			path: { accountID: string; tradeSpecifier: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
			body: Partial<{ units: string }>
		}
		response: Partial<{
			orderCreateTransaction: Schemas.MarketOrderTransaction
			orderFillTransaction: Schemas.OrderFillTransaction
			orderCancelTransaction: Schemas.OrderCancelTransaction
			relatedTransactionIDs: Array<string>
			lastTransactionID: string
		}>
	}
	export type put_SetTradeClientExtensions = {
		method: "PUT"
		path: "/accounts/{accountID}/trades/{tradeSpecifier}/clientExtensions"
		requestFormat: "json"
		parameters: {
			path: { accountID: string; tradeSpecifier: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
			body: Partial<{ clientExtensions: Schemas.ClientExtensions }>
		}
		response: Partial<{
			tradeClientExtensionsModifyTransaction: Schemas.TradeClientExtensionsModifyTransaction
			relatedTransactionIDs: Array<string>
			lastTransactionID: string
		}>
	}
	export type put_SetTradeDependentOrders = {
		method: "PUT"
		path: "/accounts/{accountID}/trades/{tradeSpecifier}/orders"
		requestFormat: "json"
		parameters: {
			path: { accountID: string; tradeSpecifier: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
			body: Partial<{
				takeProfit: Schemas.TakeProfitDetails
				stopLoss: Schemas.StopLossDetails
				trailingStopLoss: Schemas.TrailingStopLossDetails
			}>
		}
		response: Partial<{
			takeProfitOrderCancelTransaction: Schemas.OrderCancelTransaction
			takeProfitOrderTransaction: Schemas.TakeProfitOrderTransaction
			takeProfitOrderFillTransaction: Schemas.OrderFillTransaction
			takeProfitOrderCreatedCancelTransaction: Schemas.OrderCancelTransaction
			stopLossOrderCancelTransaction: Schemas.OrderCancelTransaction
			stopLossOrderTransaction: Schemas.StopLossOrderTransaction
			stopLossOrderFillTransaction: Schemas.OrderFillTransaction
			stopLossOrderCreatedCancelTransaction: Schemas.OrderCancelTransaction
			trailingStopLossOrderCancelTransaction: Schemas.OrderCancelTransaction
			trailingStopLossOrderTransaction: Schemas.TrailingStopLossOrderTransaction
			relatedTransactionIDs: Array<string>
			lastTransactionID: string
		}>
	}
	export type get_ListAccounts = {
		method: "GET"
		path: "/accounts"
		requestFormat: "json"
		parameters: {
			header: { Authorization: string }
		}
		response: Partial<{ accounts: Array<Schemas.AccountProperties> }>
	}
	export type get_GetAccount = {
		method: "GET"
		path: "/accounts/{accountID}"
		requestFormat: "json"
		parameters: {
			path: { accountID: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
		}
		response: Partial<{ account: Schemas.Account; lastTransactionID: string }>
	}
	export type get_GetAccountSummary = {
		method: "GET"
		path: "/accounts/{accountID}/summary"
		requestFormat: "json"
		parameters: {
			path: { accountID: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
		}
		response: Partial<{
			account: Schemas.AccountSummary
			lastTransactionID: string
		}>
	}
	export type get_GetAccountInstruments = {
		method: "GET"
		path: "/accounts/{accountID}/instruments"
		requestFormat: "json"
		parameters: {
			query: Partial<{ instruments: Array<string> }>
			path: { accountID: string }
			header: { Authorization: string }
		}
		response: Partial<{
			instruments: Array<Schemas.Instrument>
			lastTransactionID: string
		}>
	}
	export type patch_ConfigureAccount = {
		method: "PATCH"
		path: "/accounts/{accountID}/configuration"
		requestFormat: "json"
		parameters: {
			path: { accountID: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
			body: Partial<{ alias: string; marginRate: string }>
		}
		response: Partial<{
			clientConfigureTransaction: Schemas.ClientConfigureTransaction
			lastTransactionID: string
		}>
	}
	export type get_GetAccountChanges = {
		method: "GET"
		path: "/accounts/{accountID}/changes"
		requestFormat: "json"
		parameters: {
			query: Partial<{ sinceTransactionID: string }>
			path: { accountID: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
		}
		response: Partial<{
			changes: Schemas.AccountChanges
			state: Schemas.AccountChangesState
			lastTransactionID: string
		}>
	}
	export type get_ListTransactions = {
		method: "GET"
		path: "/accounts/{accountID}/transactions"
		requestFormat: "json"
		parameters: {
			query: Partial<{
				from: string
				to: string
				pageSize: number
				type: Array<string>
			}>
			path: { accountID: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
		}
		response: Partial<{
			from: string
			to: string
			pageSize: number
			type: Array<
				| "ORDER"
				| "FUNDING"
				| "ADMIN"
				| "CREATE"
				| "CLOSE"
				| "REOPEN"
				| "CLIENT_CONFIGURE"
				| "CLIENT_CONFIGURE_REJECT"
				| "TRANSFER_FUNDS"
				| "TRANSFER_FUNDS_REJECT"
				| "MARKET_ORDER"
				| "MARKET_ORDER_REJECT"
				| "LIMIT_ORDER"
				| "LIMIT_ORDER_REJECT"
				| "STOP_ORDER"
				| "STOP_ORDER_REJECT"
				| "MARKET_IF_TOUCHED_ORDER"
				| "MARKET_IF_TOUCHED_ORDER_REJECT"
				| "TAKE_PROFIT_ORDER"
				| "TAKE_PROFIT_ORDER_REJECT"
				| "STOP_LOSS_ORDER"
				| "STOP_LOSS_ORDER_REJECT"
				| "TRAILING_STOP_LOSS_ORDER"
				| "TRAILING_STOP_LOSS_ORDER_REJECT"
				| "ONE_CANCELS_ALL_ORDER"
				| "ONE_CANCELS_ALL_ORDER_REJECT"
				| "ONE_CANCELS_ALL_ORDER_TRIGGERED"
				| "ORDER_FILL"
				| "ORDER_CANCEL"
				| "ORDER_CANCEL_REJECT"
				| "ORDER_CLIENT_EXTENSIONS_MODIFY"
				| "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT"
				| "TRADE_CLIENT_EXTENSIONS_MODIFY"
				| "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT"
				| "MARGIN_CALL_ENTER"
				| "MARGIN_CALL_EXTEND"
				| "MARGIN_CALL_EXIT"
				| "DELAYED_TRADE_CLOSURE"
				| "DAILY_FINANCING"
				| "RESET_RESETTABLE_PL"
			>
			count: number
			pages: Array<string>
			lastTransactionID: string
		}>
	}
	export type get_GetTransaction = {
		method: "GET"
		path: "/accounts/{accountID}/transactions/{transactionID}"
		requestFormat: "json"
		parameters: {
			path: { accountID: string; transactionID: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
		}
		response: Partial<{
			transaction: Schemas.Transaction
			lastTransactionID: string
		}>
	}
	export type get_GetTransactionRange = {
		method: "GET"
		path: "/accounts/{accountID}/transactions/idrange"
		requestFormat: "json"
		parameters: {
			query: { from: string; to: string; type: Array<string> | undefined }
			path: { accountID: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
		}
		response: Partial<{
			transactions: Array<Schemas.Transaction>
			lastTransactionID: string
		}>
	}
	export type get_GetTransactionsSinceId = {
		method: "GET"
		path: "/accounts/{accountID}/transactions/sinceid"
		requestFormat: "json"
		parameters: {
			query: { id: string }
			path: { accountID: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
		}
		response: Partial<{
			transactions: Array<Schemas.Transaction>
			lastTransactionID: string
		}>
	}
	export type get_StreamTransactions = {
		method: "GET"
		path: "/accounts/{accountID}/transactions/stream"
		requestFormat: "json"
		parameters: {
			path: { accountID: string }
			header: { Authorization: string }
		}
		response: Partial<{
			transaction: Schemas.Transaction
			heartbeat: Schemas.TransactionHeartbeat
		}>
	}
	export type get_GetUserInfo = {
		method: "GET"
		path: "/users/{userSpecifier}"
		requestFormat: "json"
		parameters: {
			path: { userSpecifier: string }
			header: { Authorization: string }
		}
		response: Partial<{ userInfo: Schemas.UserInfo }>
	}
	export type get_GetExternalUserInfo = {
		method: "GET"
		path: "/users/{userSpecifier}/externalInfo"
		requestFormat: "json"
		parameters: {
			path: { userSpecifier: string }
			header: { Authorization: string }
		}
		response: Partial<{ userInfo: Schemas.UserInfoExternal }>
	}
	export type get_GetBasePrices = {
		method: "GET"
		path: "/pricing"
		requestFormat: "json"
		parameters: {
			query: Partial<{ time: string }>

			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
		}
		response: Partial<{ prices: Array<Schemas.Price> }>
	}
	export type get_GetPriceRange = {
		method: "GET"
		path: "/pricing/range"
		requestFormat: "json"
		parameters: {
			query: { from: string; to: string | undefined }
			path: { instrument: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
		}
		response: Partial<{ prices: Array<Schemas.Price> }>
	}
	export type get_GetPrices = {
		method: "GET"
		path: "/accounts/{accountID}/pricing"
		requestFormat: "json"
		parameters: {
			query: {
				instruments: Array<string>
				since: string | undefined
				includeUnitsAvailable: boolean | undefined
				includeHomeConversions: boolean | undefined
			}
			path: { accountID: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
		}
		response: Partial<{
			prices: Array<Schemas.ClientPrice>
			homeConversions: Array<Schemas.HomeConversions>
			time: string
		}>
	}
	export type get_StreamPricing = {
		method: "GET"
		path: "/accounts/{accountID}/pricing/stream"
		requestFormat: "json"
		parameters: {
			query: { instruments: Array<string>; snapshot: boolean | undefined }
			path: { accountID: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
		}
		response: Partial<{
			price: Schemas.ClientPrice
			heartbeat: Schemas.PricingHeartbeat
		}>
	}

	export type post_CreateOrder = {
		method: "POST"
		path: "/accounts/{accountID}/orders"
		requestFormat: "json"
		parameters: {
			path: { accountID: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
			body: Partial<{ order: Schemas.OrderRequest }>
		}
		response: Partial<{
			orderCreateTransaction: Schemas.Transaction
			orderFillTransaction: Schemas.OrderFillTransaction
			orderCancelTransaction: Schemas.OrderCancelTransaction
			orderReissueTransaction: Schemas.Transaction
			orderReissueRejectTransaction: Schemas.Transaction
			relatedTransactionIDs: Array<string>
			lastTransactionID: string
		}>
	}
	export type get_ListOrders = {
		method: "GET"
		path: "/accounts/{accountID}/orders"
		requestFormat: "json"
		parameters: {
			query: Partial<{
				ids: Array<string>
				state: string
				instrument: string
				count: number
				beforeID: string
			}>
			path: { accountID: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
		}
		response: Partial<{
			orders: Array<Schemas.Order>
			lastTransactionID: string
		}>
	}
	export type get_ListPendingOrders = {
		method: "GET"
		path: "/accounts/{accountID}/pendingOrders"
		requestFormat: "json"
		parameters: {
			path: { accountID: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
		}
		response: Partial<{
			orders: Array<Schemas.Order>
			lastTransactionID: string
		}>
	}
	export type get_GetOrder = {
		method: "GET"
		path: "/accounts/{accountID}/orders/{orderSpecifier}"
		requestFormat: "json"
		parameters: {
			path: { accountID: string; orderSpecifier: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
		}
		response: Partial<{ order: Schemas.Order; lastTransactionID: string }>
	}
	export type put_ReplaceOrder = {
		method: "PUT"
		path: "/accounts/{accountID}/orders/{orderSpecifier}"
		requestFormat: "json"
		parameters: {
			path: { accountID: string; orderSpecifier: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
				ClientRequestID: string | undefined
			}
			body: Partial<{ order: Schemas.OrderRequest }>
		}
		response: Partial<{
			orderCancelTransaction: Schemas.OrderCancelTransaction
			orderCreateTransaction: Schemas.Transaction
			orderFillTransaction: Schemas.OrderFillTransaction
			orderReissueTransaction: Schemas.Transaction
			orderReissueRejectTransaction: Schemas.Transaction
			replacingOrderCancelTransaction: Schemas.OrderCancelTransaction
			relatedTransactionIDs: Array<string>
			lastTransactionID: string
		}>
	}
	export type put_CancelOrder = {
		method: "PUT"
		path: "/accounts/{accountID}/orders/{orderSpecifier}/cancel"
		requestFormat: "json"
		parameters: {
			path: { accountID: string; orderSpecifier: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
				ClientRequestID: string | undefined
			}
		}
		response: Partial<{
			orderCancelTransaction: Schemas.OrderCancelTransaction
			relatedTransactionIDs: Array<string>
			lastTransactionID: string
		}>
	}
	export type put_SetOrderClientExtensions = {
		method: "PUT"
		path: "/accounts/{accountID}/orders/{orderSpecifier}/clientExtensions"
		requestFormat: "json"
		parameters: {
			path: { accountID: string; orderSpecifier: string }
			header: {
				Authorization: string
				"Accept-Datetime-Format": string | undefined
			}
			body: Partial<{
				clientExtensions: Schemas.ClientExtensions
				tradeClientExtensions: Schemas.ClientExtensions
			}>
		}
		response: Partial<{
			orderClientExtensionsModifyTransaction: Schemas.OrderClientExtensionsModifyTransaction
			lastTransactionID: string
			relatedTransactionIDs: Array<string>
		}>
	}

	// </Endpoints>
}

// <EndpointByMethod>
export type EndpointByMethod = {
	get: {
		"/instruments/{instrument}/candles": Endpoints.get_GetInstrumentCandles
		"/instruments/{instrument}/price": Endpoints.get_GetInstrumentPrice
		"/instruments/{instrument}/price/range": Endpoints.get_GetInstrumentPriceRange
		"/instruments/{instrument}/orderBook": Endpoints.get_InstrumentsInstrumentorderBook
		"/instruments/{instrument}/positionBook": Endpoints.get_InstrumentsInstrumentpositionBook
		"/accounts/{accountID}/positions": Endpoints.get_ListPositions
		"/accounts/{accountID}/openPositions": Endpoints.get_ListOpenPositions
		"/accounts/{accountID}/positions/{instrument}": Endpoints.get_GetPosition
		"/accounts/{accountID}/trades": Endpoints.get_ListTrades
		"/accounts/{accountID}/openTrades": Endpoints.get_ListOpenTrades
		"/accounts/{accountID}/trades/{tradeSpecifier}": Endpoints.get_GetTrade
		"/accounts": Endpoints.get_ListAccounts
		"/accounts/{accountID}": Endpoints.get_GetAccount
		"/accounts/{accountID}/summary": Endpoints.get_GetAccountSummary
		"/accounts/{accountID}/instruments": Endpoints.get_GetAccountInstruments
		"/accounts/{accountID}/changes": Endpoints.get_GetAccountChanges
		"/accounts/{accountID}/transactions": Endpoints.get_ListTransactions
		"/accounts/{accountID}/transactions/{transactionID}": Endpoints.get_GetTransaction
		"/accounts/{accountID}/transactions/idrange": Endpoints.get_GetTransactionRange
		"/accounts/{accountID}/transactions/sinceid": Endpoints.get_GetTransactionsSinceId
		"/accounts/{accountID}/transactions/stream": Endpoints.get_StreamTransactions
		"/users/{userSpecifier}": Endpoints.get_GetUserInfo
		"/users/{userSpecifier}/externalInfo": Endpoints.get_GetExternalUserInfo
		"/pricing": Endpoints.get_GetBasePrices
		"/pricing/range": Endpoints.get_GetPriceRange
		"/accounts/{accountID}/pricing": Endpoints.get_GetPrices
		"/accounts/{accountID}/pricing/stream": Endpoints.get_StreamPricing
		"/accounts/{accountID}/instruments/{instrument}/candles": Endpoints.get_GetInstrumentCandles
		"/accounts/{accountID}/orders": Endpoints.get_ListOrders
		"/accounts/{accountID}/pendingOrders": Endpoints.get_ListPendingOrders
		"/accounts/{accountID}/orders/{orderSpecifier}": Endpoints.get_GetOrder
	}
	put: {
		"/accounts/{accountID}/positions/{instrument}/close": Endpoints.put_ClosePosition
		"/accounts/{accountID}/trades/{tradeSpecifier}/close": Endpoints.put_CloseTrade
		"/accounts/{accountID}/trades/{tradeSpecifier}/clientExtensions": Endpoints.put_SetTradeClientExtensions
		"/accounts/{accountID}/trades/{tradeSpecifier}/orders": Endpoints.put_SetTradeDependentOrders
		"/accounts/{accountID}/orders/{orderSpecifier}": Endpoints.put_ReplaceOrder
		"/accounts/{accountID}/orders/{orderSpecifier}/cancel": Endpoints.put_CancelOrder
		"/accounts/{accountID}/orders/{orderSpecifier}/clientExtensions": Endpoints.put_SetOrderClientExtensions
	}
	patch: {
		"/accounts/{accountID}/configuration": Endpoints.patch_ConfigureAccount
	}
	post: {
		"/accounts/{accountID}/orders": Endpoints.post_CreateOrder
	}
}

// </EndpointByMethod>

// <EndpointByMethod.Shorthands>
export type GetEndpoints = EndpointByMethod["get"]
export type PutEndpoints = EndpointByMethod["put"]
export type PatchEndpoints = EndpointByMethod["patch"]
export type PostEndpoints = EndpointByMethod["post"]
export type AllEndpoints = EndpointByMethod[keyof EndpointByMethod]
// </EndpointByMethod.Shorthands>

// <ApiClientTypes>
export type EndpointParameters = {
	body?: unknown
	query?: Record<string, unknown>
	header?: Record<string, unknown>
	path?: Record<string, unknown>
}

export type MutationMethod = "post" | "put" | "patch" | "delete"
export type Method = "get" | "head" | "options" | MutationMethod

type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text"

export type DefaultEndpoint = {
	parameters?: EndpointParameters | undefined
	response: unknown
}

export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
	operationId: string
	method: Method
	path: string
	requestFormat: RequestFormat
	parameters?: TConfig["parameters"]
	meta: {
		alias: string
		hasParameters: boolean
		areParametersRequired: boolean
	}
	response: TConfig["response"]
}

type Fetcher = (
	method: Method,
	url: string,
	parameters?: EndpointParameters | undefined
) => Promise<Endpoint["response"]>

type RequiredKeys<T> = {
	[P in keyof T]-?: undefined extends T[P] ? never : P
}[keyof T]

type MaybeOptionalArg<T> = RequiredKeys<T> extends never
	? [config?: T]
	: [config: T]

// </ApiClientTypes>

// <ApiClient>
export class ApiClient {
	baseUrl = ""

	constructor(public fetcher: Fetcher) {}

	setBaseUrl(baseUrl: string) {
		this.baseUrl = baseUrl
		return this
	}

	// <ApiClient.get>
	get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
		path: Path,
		...params: MaybeOptionalArg<TEndpoint["parameters"]>
	): Promise<TEndpoint["response"]> {
		return this.fetcher("get", this.baseUrl + path, params[0]) as Promise<
			TEndpoint["response"]
		>
	}
	// </ApiClient.get>

	// <ApiClient.put>
	put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
		path: Path,
		...params: MaybeOptionalArg<TEndpoint["parameters"]>
	): Promise<TEndpoint["response"]> {
		return this.fetcher("put", this.baseUrl + path, params[0]) as Promise<
			TEndpoint["response"]
		>
	}
	// </ApiClient.put>

	// <ApiClient.patch>
	patch<
		Path extends keyof PatchEndpoints,
		TEndpoint extends PatchEndpoints[Path],
	>(
		path: Path,
		...params: MaybeOptionalArg<TEndpoint["parameters"]>
	): Promise<TEndpoint["response"]> {
		return this.fetcher("patch", this.baseUrl + path, params[0]) as Promise<
			TEndpoint["response"]
		>
	}
	// </ApiClient.patch>

	// <ApiClient.post>
	post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
		path: Path,
		...params: MaybeOptionalArg<TEndpoint["parameters"]>
	): Promise<TEndpoint["response"]> {
		return this.fetcher("post", this.baseUrl + path, params[0]) as Promise<
			TEndpoint["response"]
		>
	}
	// </ApiClient.post>
}

export function createApiClient(fetcher: Fetcher, baseUrl?: string) {
	return new ApiClient(fetcher).setBaseUrl(baseUrl ?? "")
}

/**
 Example usage:
 const api = createApiClient((method, url, params) =>
   fetch(url, { method, body: JSON.stringify(params) }).then((res) => res.json()),
 );
 api.get("/users").then((users) => console.log(users));
 api.post("/users", { body: { name: "John" } }).then((user) => console.log(user));
 api.put("/users/:id", { path: { id: 1 }, body: { name: "John" } }).then((user) => console.log(user));
*/

// </ApiClient
