class Game < ActiveRecord::Base
  has_many :teams
  has_many :players, through: :teams

  include LoadRankingAlgorithm

  after_save :calculate_player_rankings

  def valid?(context=nil)
    # Need to have at least two players
    logger.debug 'Need to have at least two players'
    return false unless players.count >= 2

    # Need to have a score for each team
    logger.debug 'Need to have a score for each team'
    return false unless teams.all{ |team| score.present? }

    # If one team has two players, then the other team should too
    logger.debug 'If one team has two players, then the other team should too'
    return false if teams.one?{ |team| team.players.count == 2 }

    # Make sure all players are unique
    logger.debug 'Make sure all players are unique'

    return false unless (pls = teams.reduce([]){ |x,y| x + y.players.map(&:id) }).uniq.count == pls.count

    logger.debug 'Validation OKAY'
    true
  end

  def self.won_by_player(player)
    select do |game|
      game if game.winners.include? player
    end
  end

  def self.lost_by_player(player)
    select do |game|
      game if game.losers.include? player
    end
  end

  def winners
    teams.select{ |team| team.score == winning_score }.first.players
  end

  def losers
    teams.select{ |team| team.score == losing_score }.first.players
  end

  def winning_score
    teams.winning_score
  end

  def losing_score
    teams.losing_score
  end

  def self.newer_than(time)
    g = Game.arel_table
    where(g[:created_at].gt(time))
  end

  def calculate_player_rankings
    ranking_algorithm.calculate(self)
  end
end
