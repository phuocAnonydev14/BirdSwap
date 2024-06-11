import { ChainId, Currency, CurrencyAmount, ETHER, Token, TokenAmount, WETH } from '@uniswap/sdk';
import { wtBTC } from '../constants';

export function wrappedCurrency(currency: Currency | undefined, chainId: ChainId | undefined): Token | undefined {
  // @ts-ignore
  const weth = chainId === 11118 ? wtBTC : WETH[chainId];
  return chainId && currency === ETHER ? weth : currency instanceof Token ? currency : undefined;
}

export function wrappedCurrencyAmount(
  currencyAmount: CurrencyAmount | undefined,
  chainId: ChainId | undefined
): TokenAmount | undefined {
  const token = currencyAmount && chainId ? wrappedCurrency(currencyAmount.currency, chainId) : undefined;
  return token && currencyAmount ? new TokenAmount(token, currencyAmount.raw) : undefined;
}

export function unwrappedToken(token: Token): Currency {
  // @ts-ignore
  const weth = token.chainId === 11118 ? wtBTC : WETH[token.chainId];
  if (token.equals(weth)) return ETHER;
  return token;
}
