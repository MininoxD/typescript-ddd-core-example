import { DomainEvent } from '../../../../../src/contexts/shared/domain/DomainEvent'
import { EventBus } from '../../../../../src/contexts/shared/domain/EventBus'

export default class EventBusMock implements EventBus {
  private publishSpy = jest.fn()

  async publish(events: DomainEvent[]) {
    console.log(events)
    this.publishSpy(events)
  }

  async start(): Promise<void> {
    console.log('EventBusMock started')
  }

  assertLastPublishedEventIs(expectedEvent: DomainEvent) {
    const publishSpyCalls = this.publishSpy.mock.calls

    expect(publishSpyCalls.length).toBeGreaterThan(0)

    const lastPublishSpyCall = publishSpyCalls[publishSpyCalls.length - 1]
    const lastPublishedEvent = lastPublishSpyCall[0][0]

    expect(this.getDataFromDomainEvent(expectedEvent)).toMatchObject(
      this.getDataFromDomainEvent(lastPublishedEvent)
    )
  }

  private getDataFromDomainEvent(event: DomainEvent) {
    const { eventId, occurredOn, ...attributes } = event

    return attributes
  }
}
