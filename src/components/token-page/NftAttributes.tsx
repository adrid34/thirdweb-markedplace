import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Card,
  Flex,
  Text,
} from "@chakra-ui/react";

export function NftAttributes({
  attributes,
}: {
  attributes: Record<string, any>[];
}) {
  /**
   * Assume the NFT attributes follow the conventional format
   */
  const items = attributes.filter(
    (item: Record<string, any>) => item.trait_type
  );
  return (
    <AccordionItem>
      <Text>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            Traits
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Text>
      <AccordionPanel pb={4}>
        <Flex direction="row" wrap="wrap" gap="3">
          {items.map((item, idx) => (
            <Card
              key={String(item.trait_type) || idx}
              as={Flex}
              flexDir="column"
              gap={2}
              py={2}
              px={4}
              bg={"transparent"}
              border="1px"
            >
              {item.trait_type && (
                <Text size="label.sm" textAlign="center" lineHeight={1.2}>
                  {String(item.trait_type)}
                </Text>
              )}
              <Text size="label.md" textAlign="center" fontWeight="bold">
                {String(item.value)}
              </Text>
            </Card>
          ))}
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
}
