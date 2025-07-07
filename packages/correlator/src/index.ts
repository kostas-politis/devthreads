import { AsyncLocalStorage } from "async_hooks";

export type CorrelatorData = {
  correlationId: string;
};

class Correlator {
  private storage = new AsyncLocalStorage<CorrelatorData>();

  /**
   * Runs the provided callback within a new correlation ID context.
   *
   * @param callback The function to run within the correlation ID context.
   * @param correlationId Correlation ID to use.
   */
  public run(callback: () => void, correlationId: string): void {
    this.storage.run({ correlationId }, callback);
  }

  /**
   * Retrieves the current correlation ID from the async local storage.
   *
   * @returns The current correlation ID or undefined.
   */
  public getId(): string | undefined {
    return this.storage.getStore()?.correlationId;
  }
}

export const correlator = new Correlator();

export type CorrelatorType = typeof correlator;
