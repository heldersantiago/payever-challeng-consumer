interface MessageDTO {
  fields: {
    consumerTag: string;
    deliveryTag: number;
    redelivered: boolean;
    exchange: string;
    routingKey: string;
  };
  properties: {
    headers: Record<string, any>;
  };
  content: {
    type: string;
    data: any[];
  };
}
