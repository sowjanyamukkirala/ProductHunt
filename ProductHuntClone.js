import { Button, Card, Text, Image } from '@mantine/core';
import { useState } from 'react';

const ProductHuntClone = () => {
  const [upvoted, setUpvoted] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src="https://via.placeholder.com/800x400"
            alt="Product image"
            height={160}
          />
        </Card.Section>
        <Text weight={500} size="lg" mt="md">
          Product Title
        </Text>
        <Text size="sm" color="dimmed" mt="xs">
          A short description of the product. This could include key features or benefits.
        </Text>
        <div className="flex items-center justify-between mt-4">
          <Text size="sm" color="dimmed">
            12 votes
          </Text>
          <Button
            color={upvoted ? 'red' : 'blue'}
            onClick={() => setUpvoted(!upvoted)}
          >
            {upvoted ? 'Upvoted' : 'Upvote'}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ProductHuntClone;
