import { useEffect, useState } from "react";
import rulesData from "./rules.json";
import {
  Container,
  Title,
  SearchBar,
  RulesGrid,
  CategoryCard,
  CategoryTitle,
  RuleCard,
  RuleTitle,
  RuleText,
  ToggleIcon,
  RulePunishment
} from "./RulesPage.styled";
import { FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";

const RulesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRules, setFilteredRules] = useState(rulesData);
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({});
  const [expandedRules, setExpandedRules] = useState<Record<string, boolean>>(
    {}
  );

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = rulesData
      .map((category) => ({
        ...category,
        rules: category.rules.filter(
          (rule) =>
            rule.title.toLowerCase().includes(term) ||
            rule.text.toLowerCase().includes(term)
        ),
      }))
      .filter((cat) => cat.rules.length > 0);
    setFilteredRules(filtered);
  }, [searchTerm]);

  const toggleCategory = (name: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const toggleRule = (id: string) => {
    setExpandedRules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Container>
      <Title>📜 Правила сервера</Title>

      <SearchBar>
        <FaSearch />
        <input
          type="text"
          placeholder="Пошук правил..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchBar>

      <RulesGrid>
        {filteredRules.map((category) => {
          const isCategoryExpanded =
            expandedCategories[category.category] ?? true;

          return (
            <CategoryCard key={category.category}>
              <CategoryTitle onClick={() => toggleCategory(category.category)}>
                {category.category}
                <ToggleIcon>
                  {isCategoryExpanded ? <FaChevronUp /> : <FaChevronDown />}
                </ToggleIcon>
              </CategoryTitle>

              {isCategoryExpanded &&
                category.rules.map((rule, index) => {
                  const ruleId = `${category.category}-${index}`;
                  const isRuleExpanded = expandedRules[ruleId] ?? true;

                  return (
                    <RuleCard key={ruleId}>
                      <RuleTitle onClick={() => toggleRule(ruleId)}>
                        {rule.title}
                        <ToggleIcon>
                          {isRuleExpanded ? <FaChevronUp /> : <FaChevronDown />}
                        </ToggleIcon>
                      </RuleTitle>
                      {isRuleExpanded && (
                        <>
                          <RuleText>{rule.text}</RuleText>
                          {rule.punishment && (
                            <RulePunishment>
                              <strong>Покарання:</strong> {rule.punishment}
                            </RulePunishment>
                          )}
                        </>
                      )}
                    </RuleCard>
                  );
                })}
            </CategoryCard>
          );
        })}
      </RulesGrid>
    </Container>
  );
};

export default RulesPage;
